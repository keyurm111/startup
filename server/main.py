import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langchain_groq import ChatGroq
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain_community.tools import DuckDuckGoSearchRun
from langchain.tools import Tool
from fastapi.middleware.cors import CORSMiddleware

# Load environment variables
load_dotenv()
os.environ["GROQ_API_KEY"] = os.getenv("GROQ_API_KEY")

# Initialize FastAPI app
app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize tools
duck_search_tool = Tool(
    name="DuckDuckGo Search",
    func=DuckDuckGoSearchRun().run,
    description="Search the web for current information using DuckDuckGo"
)

def get_llm():
    """Setup LLM with appropriate configuration using LangChain."""
    groq_api_key = os.getenv("GROQ_API_KEY")
    if not groq_api_key:
        raise ValueError("GROQ_API_KEY not found. Please set it in your .env file.")
    
    try:
        return ChatGroq(
            groq_api_key=groq_api_key,
            model="llama3-70b-8192",
            temperature=0.7,
            verbose=True
        )
    except Exception as e:
        raise ValueError(f"Failed to initialize ChatGroq: {str(e)}")

def create_agent_chains(llm):
    """Create LangChain chains for each specialized startup agent."""
    
    # Market Research Analyst Prompt
    market_research_prompt = PromptTemplate(
        input_variables=["startup_info"],
        template="""You are an experienced market research analyst specializing in emerging industries and technology trends.
        Research and analyze the market for this startup:
        {startup_info}
        Provide:
        1. Total Addressable Market (TAM) size and growth rate
        2. Serviceable Available Market (SAM) analysis
        3. Key market trends and future outlook
        4. Main competitors and their market share
        5. Market entry barriers
        6. Regulatory considerations
        7. Market validation indicators or red flags"""
    )
    
    # Startup Ecosystem Expert Prompt
    ecosystem_prompt = PromptTemplate(
        input_variables=["startup_info", "market_research"],
        template="""You are a startup ecosystem expert with deep knowledge of accelerators and funding patterns.
        Given this market research: {market_research}
        Analyze this startup: {startup_info}
        Provide:
        1. Similar funded startups in the last 3 years
        2. Accelerator acceptance patterns
        3. Success and failure cases
        4. Current funding trends
        5. Insights from prominent VCs
        6. Potential acquirers
        7. Red flags from previous failures"""
    )
    
    # Business Model Strategist Prompt
    business_strategy_prompt = PromptTemplate(
        input_variables=["startup_info", "market_research", "ecosystem_analysis"],
        template="""You are a business strategist specializing in sustainable business models.
        Using this market research: {market_research}
        And ecosystem analysis: {ecosystem_analysis}
        Evaluate this startup: {startup_info}
        Provide:
        1. Business model viability assessment
        2. Comparative analysis with successful companies
        3. Alternative revenue streams
        4. Go-to-market strategy recommendations
        5. CAC and LTV considerations
        6. Scalability assessment
        7. Potential pivot scenarios"""
    )
    
    # Investment Analyst Prompt
    investment_prompt = PromptTemplate(
        input_variables=["startup_info", "market_research", "ecosystem_analysis", "business_strategy"],
        template="""You are a startup investment analyst with VC experience.
        Using all previous analyses:
        Market Research: {market_research}
        Ecosystem Analysis: {ecosystem_analysis}
        Business Strategy: {business_strategy}
        Assess this startup: {startup_info}
        Provide:
        1. Investment attractiveness (1-10) with justification
        2. Key strengths and weaknesses
        3. Valuation range based on comparables
        4. Recommended next steps
        5. Key metrics for investors
        6. Target investor types
        7. Final recommendation: Proceed, Pivot, or Reconsider"""
    )
    
    # Create chains for each agent
    market_chain = LLMChain(llm=llm, prompt=market_research_prompt)
    ecosystem_chain = LLMChain(llm=llm, prompt=ecosystem_prompt)
    strategy_chain = LLMChain(llm=llm, prompt=business_strategy_prompt)
    investment_chain = LLMChain(llm=llm, prompt=investment_prompt)
    
    return market_chain, ecosystem_chain, strategy_chain, investment_chain

# Pydantic model for request validation
class StartupInfo(BaseModel):
    industry: str
    problem_statement: str
    product_description: str
    target_customers: str
    business_model: str
    revenue_model: str
    pricing: str
    acquisition_strategy: str
    unit_economics: str = "Not provided"
    value_proposition: str
    team_background: str
    current_traction: str = "Pre-launch"
    funding_needs: str = "Not specified"
    competitive_advantage: str
    timeline: str = "Not provided"
    additional_info: str = "None"

@app.post("/api/validate-startup")
async def validate_startup(startup_info: StartupInfo):
    """API endpoint to validate startup ideas."""
    try:
        # Get the LLM
        llm = get_llm()
        
        # Create LangChain chains
        market_chain, ecosystem_chain, strategy_chain, investment_chain = create_agent_chains(llm)
        
        # Convert Pydantic model to dict and format for analysis
        startup_info_str = "\n".join([f"{k}: {v}" for k, v in startup_info.dict().items()])
        
        # Run analysis chains
        market_research = market_chain.run(startup_info=startup_info_str)
        ecosystem_analysis = ecosystem_chain.run(
            startup_info=startup_info_str,
            market_research=market_research
        )
        business_strategy = strategy_chain.run(
            startup_info=startup_info_str,
            market_research=market_research,
            ecosystem_analysis=ecosystem_analysis
        )
        investment_analysis = investment_chain.run(
            startup_info=startup_info_str,
            market_research=market_research,
            ecosystem_analysis=ecosystem_analysis,
            business_strategy=business_strategy
        )
        
        # Return analysis results
        return {
            "market_research": market_research,
            "ecosystem_analysis": ecosystem_analysis,
            "business_strategy": business_strategy,
            "investment_analysis": investment_analysis
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
def read_root():
    return {"message": "Startup Validator API is running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
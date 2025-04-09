
import { useState } from 'react';
import Header from '@/components/Header';
import FormTab from '@/components/FormTab';
import IdeaBasicsForm from '@/components/IdeaBasicsForm';
import BusinessModelForm from '@/components/BusinessModelForm';
import TeamTractionForm from '@/components/TeamTractionForm';
import ResultScreen from '@/components/ResultScreen';
import SuccessStories from '@/components/SuccessStories';
import { useToast } from '@/hooks/use-toast';

type FormTab = 'ideaBasics' | 'businessModel' | 'teamTraction';

const mockValidationResult = {
  overallScore: 7,
  marketAnalysis: "The target market size is substantial with a projected CAGR of 18% over the next 5 years. Your solution addresses a real pain point for the identified customer segments. However, market saturation in certain geographies could present challenges for market entry without clear differentiation.",
  businessModelEvaluation: "The subscription model is well-aligned with customer needs and provides good potential for recurring revenue. Unit economics appear sustainable, though customer acquisition costs may be higher than estimated in the early stages. The pricing strategy is competitive but may have room for optimization based on perceived value.",
  competitiveAnalysis: "You have 3-4 direct competitors and several indirect alternatives. Your technical approach provides some defensibility, but building a strong brand and focusing on your unique value proposition will be critical to differentiate from established players.",
  recommendations: [
    "Consider a phased geographical expansion strategy, starting with less saturated markets",
    "Develop a more detailed customer acquisition plan with specific channel economics",
    "Explore partnerships with complementary service providers to reduce CAC",
    "Strengthen the core technical team with domain expertise",
    "Test premium pricing tiers with early adopters to validate willingness to pay"
  ],
  investmentPotential: "The business shows moderate to high investment potential. With the current team composition and traction metrics, you're well-positioned for angel or seed funding. To attract larger investments, focus on demonstrating early customer validation and refining the unit economics."
};

const Index = () => {
  const [activeTab, setActiveTab] = useState<FormTab>('ideaBasics');
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [validationResult, setValidationResult] = useState<any>(null);
  const { toast } = useToast();

  const handleTabChange = (tab: FormTab) => {
    setActiveTab(tab);
  };

  const handleSubmitForm = async () => {
    // Validate essential fields
    if (!formData.industry || !formData.productDescription || !formData.problemStatement) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields in the Idea Basics section",
        variant: "destructive"
      });
      setActiveTab('ideaBasics');
      return;
    }

    if (!formData.businessModelType || !formData.revenueModelDetails) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields in the Business Model section",
        variant: "destructive"
      });
      setActiveTab('businessModel');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Here you would integrate with your backend API
      // const response = await fetch('your-backend-api-url', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // const data = await response.json();
      
      // For now, we'll simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Using mock data for now
      setValidationResult(mockValidationResult);
      
      toast({
        title: "Validation complete",
        description: "Your startup idea has been analyzed successfully",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Unable to validate your startup idea. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({});
    setValidationResult(null);
    setActiveTab('ideaBasics');
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <Header />
      
      {!validationResult ? (
        <>
          <div className="border-b border-gray-700 mb-8">
            <div className="flex space-x-4">
              <FormTab 
                title="Idea Basics" 
                isActive={activeTab === 'ideaBasics'} 
                onClick={() => handleTabChange('ideaBasics')}
              />
              <FormTab 
                title="Business Model" 
                isActive={activeTab === 'businessModel'} 
                onClick={() => handleTabChange('businessModel')}
              />
              <FormTab 
                title="Team & Traction" 
                isActive={activeTab === 'teamTraction'} 
                onClick={() => handleTabChange('teamTraction')}
              />
            </div>
          </div>
          
          <div className="mb-10">
            {activeTab === 'ideaBasics' && (
              <IdeaBasicsForm formData={formData} setFormData={setFormData} />
            )}
            
            {activeTab === 'businessModel' && (
              <BusinessModelForm formData={formData} setFormData={setFormData} />
            )}
            
            {activeTab === 'teamTraction' && (
              <TeamTractionForm 
                formData={formData} 
                setFormData={setFormData} 
                onSubmit={handleSubmitForm}
                isLoading={isLoading}
              />
            )}
          </div>
          
          <div className="flex justify-between mt-8">
            <button
              className="px-6 py-2 text-white bg-transparent hover:bg-startup-gray/20 rounded-md transition-colors"
              onClick={() => {
                if (activeTab === 'ideaBasics') return;
                if (activeTab === 'businessModel') setActiveTab('ideaBasics');
                if (activeTab === 'teamTraction') setActiveTab('businessModel');
              }}
              disabled={activeTab === 'ideaBasics'}
            >
              Previous
            </button>
            
            {activeTab !== 'teamTraction' && (
              <button
                className="px-6 py-2 text-white bg-startup-blue hover:bg-startup-darkBlue rounded-md transition-colors"
                onClick={() => {
                  if (activeTab === 'ideaBasics') setActiveTab('businessModel');
                  if (activeTab === 'businessModel') setActiveTab('teamTraction');
                }}
              >
                Next
              </button>
            )}
          </div>
        </>
      ) : (
        <ResultScreen result={validationResult} onStartOver={resetForm} />
      )}
      
      <SuccessStories />
    </div>
  );
};

export default Index;

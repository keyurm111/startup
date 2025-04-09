import axios from 'axios';

export interface StartupInfo {
    industry: string;
    problem_statement: string;
    product_description: string;
    target_customers: string;
    business_model: string;
    revenue_model: string;
    pricing: string;
    acquisition_strategy: string;
    unit_economics?: string;
    value_proposition: string;
    team_background: string;
    current_traction?: string;
    funding_needs?: string;
    competitive_advantage: string;
    timeline?: string;
    additional_info?: string;
}

export interface ValidationResponse {
    market_research: string;
    ecosystem_analysis: string;
    business_strategy: string;
    investment_analysis: string;
}

const API_BASE_URL = 'http://localhost:8000';

export const api = {
    validateStartup: async (startupInfo: StartupInfo): Promise<ValidationResponse> => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/validate-startup`, startupInfo);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.detail || 'Failed to validate startup');
            }
            throw error;
        }
    }
};
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import FormTab from '@/components/FormTab';
import IdeaBasicsForm from '@/components/IdeaBasicsForm';
import BusinessModelForm from '@/components/BusinessModelForm';
import TeamTractionForm from '@/components/TeamTractionForm';
import ResultScreen from '@/components/ResultScreen';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { api, StartupInfo, ValidationResponse } from '@/services/api';

type FormTab = 'ideaBasics' | 'businessModel' | 'teamTraction';



const AIAgentPage = () => {
  const [activeTab, setActiveTab] = useState<FormTab>('ideaBasics');
  const [formData, setFormData] = useState<Partial<StartupInfo>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [validationResult, setValidationResult] = useState<any>(null);
  const { toast } = useToast();

  const handleTabChange = (tab: FormTab) => {
    setActiveTab(tab);
  };

  const handleSubmitForm = async () => {
    // Validate essential fields
    if (!formData.industry || !formData.product_description || !formData.problem_statement) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields in the Idea Basics section",
        variant: "destructive"
      });
      setActiveTab('ideaBasics');
      return;
    }

    if (!formData.business_model || !formData.revenue_model) {
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
      const startupInfo: StartupInfo = {
        industry: formData.industry!,
        problem_statement: formData.problem_statement!,
        product_description: formData.product_description!,
        target_customers: formData.target_customers!,
        business_model: formData.business_model!,
        revenue_model: formData.revenue_model!,
        pricing: formData.pricing!,
        acquisition_strategy: formData.acquisition_strategy!,
        unit_economics: formData.unit_economics,
        value_proposition: formData.value_proposition!,
        team_background: formData.team_background!,
        current_traction: formData.current_traction,
        funding_needs: formData.funding_needs,
        competitive_advantage: formData.competitive_advantage!,
        timeline: formData.timeline,
        additional_info: formData.additional_info
      };

      const result = await api.validateStartup(startupInfo);
      setValidationResult(result);
      
      toast({
        title: "Validation complete",
        description: "Your startup idea has been analyzed successfully",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Unable to validate your startup idea. Please try again.",
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
    <div className="min-h-screen bg-startup-darker">
      <div className="container mx-auto px-4">
        <Navigation />
        
        <div className="max-w-6xl mx-auto pt-8 pb-16">
          <Header />
          
          {!validationResult ? (
            <>
              <div className="bg-startup-gray/10 p-8 rounded-lg border border-gray-700">
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
              </div>
            </>
          ) : (
            <ResultScreen result={validationResult} onStartOver={resetForm} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIAgentPage;

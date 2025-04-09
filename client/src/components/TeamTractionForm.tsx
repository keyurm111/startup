
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface TeamTractionFormProps {
  formData: any;
  setFormData: (data: any) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const TeamTractionForm = ({ formData, setFormData, onSubmit, isLoading }: TeamTractionFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.team_background) {
      toast.error("Please provide team background information");
      return;
    }
    onSubmit();
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8">Team & Traction</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="teamBackground" className="form-label">Team Background</label>
          <textarea
            id="team_background"
            name="team_background"
            className="textarea-field"
            placeholder="Describe founders' experience, skills, and relevant background..."
            value={formData.team_background || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="competitiveAdvantage" className="form-label">Competitive Advantage</label>
          <textarea
            id="competitive_advantage"
            name="competitive_advantage"
            className="textarea-field"
            placeholder="What sustainable advantages do you have over potential competitors?"
            value={formData.competitive_advantage || ''}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="currentTraction" className="form-label">Current Traction</label>
          <textarea
            id="current_traction"
            name="current_traction"
            className="textarea-field"
            placeholder="Describe any users, revenue, pilots, waitlist, or other traction metrics..."
            value={formData.current_traction || ''}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="timelineMilestones" className="form-label">Timeline & Milestones</label>
          <textarea
            id="timeline"
            name="timeline"
            className="textarea-field"
            placeholder="Share your key milestones and timeline for the next 12-18 months"
            value={formData.timeline || ''}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="fundingNeeds" className="form-label">Funding Needs (if any)</label>
          <input
            type="text"
            id="funding_needs"
            name="funding_needs"
            className="input-field"
            placeholder="E.g., $500K seed round"
            value={formData.funding_needs || ''}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="additionalInfo" className="form-label">Additional Information</label>
          <textarea
            id="additional_info"
            name="additional_info"
            className="textarea-field"
            placeholder="Any other relevant details you'd like our validation team to consider"
            value={formData.additional_info || ''}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mt-8">
        <Button 
          onClick={handleSubmit} 
          disabled={isLoading}
          className="bg-startup-blue hover:bg-startup-darkBlue text-white px-6 py-5 rounded-md transition-colors font-medium text-base"
        >
          {isLoading ? "Analyzing your idea..." : "Validate Startup Idea"}
        </Button>
      </div>
    </div>
  );
};

export default TeamTractionForm;

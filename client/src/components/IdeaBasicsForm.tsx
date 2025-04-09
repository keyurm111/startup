
import { useState } from 'react';
import { Select } from '@/components/ui/select';

interface IdeaBasicsFormProps {
  formData: any;
  setFormData: (data: any) => void;
}

const INDUSTRY_OPTIONS = [
  "SaaS",
  "Fintech",
  "Healthcare",
  "E-commerce",
  "AI/ML",
  "Education",
  "Entertainment",
  "Social Media",
  "Hardware",
  "Blockchain",
  "Logistics",
  "Other"
];

const IdeaBasicsForm = ({ formData, setFormData }: IdeaBasicsFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8">Startup Concept</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label htmlFor="industry" className="form-label">Industry</label>
          <select 
            name="industry" 
            id="industry" 
            className="input-field"
            value={formData.industry || ''}
            onChange={handleChange}
          >
            <option value="" disabled>Select an industry</option>
            {INDUSTRY_OPTIONS.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="productDescription" className="form-label">Product/Service Description</label>
          <textarea
            id="product_description"
            name="product_description"
            className="textarea-field"
            placeholder="Describe your product or service in detail..."
            value={formData.product_description || ''}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="problemStatement" className="form-label">Problem Statement</label>
          <textarea
            id="problem_statement"
            name="problem_statement"
            className="textarea-field"
            placeholder="Describe the problem your startup aims to solve..."
            value={formData.problem_statement || ''}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="targetCustomers" className="form-label">Target Customers</label>
          <textarea
            id="target_customers"
            name="target_customers"
            className="textarea-field"
            placeholder="Describe your ideal customer segments..."
            value={formData.target_customers || ''}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default IdeaBasicsForm;

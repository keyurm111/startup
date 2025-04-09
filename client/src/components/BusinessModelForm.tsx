
import { useState } from 'react';

interface BusinessModelFormProps {
  formData: any;
  setFormData: (data: any) => void;
}

const BUSINESS_MODEL_TYPES = [
  "SaaS",
  "Marketplace",
  "E-commerce",
  "Subscription",
  "Freemium",
  "Ad-supported",
  "Transaction-based",
  "Hardware",
  "Service-based",
  "Licensing",
  "Other"
];

const BusinessModelForm = ({ formData, setFormData }: BusinessModelFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8">Business Model</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label htmlFor="business_model" className="form-label">Business Model Type</label>
          <select 
            name="business_model" 
            id="business_model" 
            className="input-field"
            value={formData.business_model || ''}
            onChange={handleChange}
          >
            <option value="" disabled>Select a business model</option>
            {BUSINESS_MODEL_TYPES.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="revenue_model" className="form-label">Revenue Model Details</label>
          <textarea
            id="revenue_model"
            name="revenue_model"
            className="textarea-field"
            placeholder="Explain how your startup will generate revenue..."
            value={formData.revenue_model || ''}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="pricing" className="form-label">Pricing Strategy</label>
          <textarea
            id="pricing"
            name="pricing"
            className="textarea-field"
            placeholder="Explain your pricing structure and strategy..."
            value={formData.pricing || ''}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="acquisition_strategy" className="form-label">Customer Acquisition Strategy</label>
          <textarea
            id="acquisition_strategy"
            name="acquisition_strategy"
            className="textarea-field"
            placeholder="How will you acquire customers? What channels will you use?"
            value={formData.acquisition_strategy || ''}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="unit_economics" className="form-label">Unit Economics</label>
          <textarea
            id="unit_economics"
            name="unit_economics"
            className="textarea-field"
            placeholder="Share any information about CAC, LTV, margins, etc. (if available)"
            value={formData.unit_economics || ''}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="value_proposition" className="form-label">Unique Value Proposition</label>
          <textarea
            id="value_proposition"
            name="value_proposition"
            className="textarea-field"
            placeholder="What makes your solution unique and valuable to customers?"
            value={formData.value_proposition || ''}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessModelForm;

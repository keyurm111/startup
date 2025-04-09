
import { ReactNode } from 'react';

interface FormTabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const FormTab = ({ title, isActive, onClick }: FormTabProps) => {
  return (
    <button
      className={`px-6 py-3 font-medium transition-all ${
        isActive 
          ? 'text-white border-b-2 border-startup-blue' 
          : 'text-gray-400 border-b-2 border-transparent hover:text-gray-200'
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default FormTab;


import { Brain } from 'lucide-react';

const Header = () => {
  return (
    <header className="mb-12 mt-12 text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-startup-blue/20 p-4 rounded-full">
          <Brain className="h-12 w-12 text-startup-blue" />
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Startup Idea Validator</h1>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        Get comprehensive validation of your startup idea through market research, ecosystem analysis, business model evaluation, and investment potential assessment. Our AI team will analyze your idea from multiple perspectives to provide insights and recommendations.
      </p>
    </header>
  );
};

export default Header;


import { Button } from '@/components/ui/button';

interface ValidationResult {
  market_research: string;
  ecosystem_analysis: string;
  business_strategy: string;
  investment_analysis: string;
}

interface ResultScreenProps {
  result: ValidationResult;
  onStartOver: () => void;
}

const ResultScreen = ({ result, onStartOver }: ResultScreenProps) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Startup Idea Validation Results</h2>
      </div>

      <div className="space-y-6 mb-8">
        <div className="bg-startup-input rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Market Research</h3>
          <p className="text-gray-300 whitespace-pre-line">{result.market_research}</p>
        </div>

        <div className="bg-startup-input rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Ecosystem Analysis</h3>
          <p className="text-gray-300 whitespace-pre-line">{result.ecosystem_analysis}</p>
        </div>

        <div className="bg-startup-input rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Business Strategy</h3>
          <p className="text-gray-300 whitespace-pre-line">{result.business_strategy}</p>
        </div>

        <div className="bg-startup-input rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Investment Analysis</h3>
          <p className="text-gray-300 whitespace-pre-line">{result.investment_analysis}</p>
        </div>
      </div>

      <div className="text-center">
        <Button 
          onClick={onStartOver}
          className="bg-startup-blue hover:bg-startup-darkBlue text-white px-6 py-3 rounded-md transition-colors"
        >
          Validate Another Idea
        </Button>
      </div>
    </div>
  );
};

export default ResultScreen;

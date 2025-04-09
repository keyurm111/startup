
import { Rocket } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-white">
      <div className="bg-gradient-to-br from-startup-blue to-blue-700 p-2 rounded-lg">
        <Rocket className="h-6 w-6 text-white" />
      </div>
      <div>
        <span className="text-2xl font-bold">Startup<span className="text-startup-blue">Spark</span></span>
        <p className="text-xs text-gray-400">AI Idea Validator</p>
      </div>
    </div>
  );
};

export default Logo;

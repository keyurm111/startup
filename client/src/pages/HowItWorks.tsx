import { Rocket } from 'lucide-react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Navigation />
        <Header />
        
        <div className="mt-12 space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Rocket className="text-startup-blue" />
              Step 1: Submit Your Idea
            </h2>
            <p className="text-gray-300">
              Describe your startup concept in our simple form. Include details about your industry, 
              target customers, and unique value proposition.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Rocket className="text-startup-blue" />
              Step 2: AI Analysis
            </h2>
            <p className="text-gray-300">
              Our AI system evaluates your idea across multiple dimensions including market potential, 
              competition, and business model viability.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Rocket className="text-startup-blue" />
              Step 3: Get Results
            </h2>
            <p className="text-gray-300">
              Receive a comprehensive report with strengths, weaknesses, and actionable 
              recommendations to improve your startup's chances of success.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Brain, CheckCircle, Users, LineChart, Shield, ChevronRight } from 'lucide-react';
import SuccessStories from '@/components/SuccessStories';
import ReviewForm from '@/components/ReviewForm';
import HeroBackground from '@/components/HeroBackground';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto">
        <Navigation />

        {/* Hero Section */}
        <section className="min-h-[100vh] py-24 md:py-32 w-full relative overflow-hidden flex items-center justify-center">
          <HeroBackground />
          {/* Gradient overlay to help text stand out */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70 z-[1]"></div>
          <div className="mx-auto text-center relative z-10 w-full px-4">
            <h1 className="text-4xl md:text-6xl p-4 font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-200 mb-6 leading-tight">
              Validate Your Startup Idea
              <br />
              with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">AI-Powered</span> Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 font-normal leading-relaxed tracking-wide max-w-3xl mx-auto">
              Get comprehensive validation of your startup idea through market research, ecosystem analysis, business model evaluation, and investment potential assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/ai-validator">
                <Button className="bg-gradient-to-r from-startup-blue to-blue-600 hover:from-startup-darkBlue hover:to-blue-700 text-white px-10 py-7 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Validate My Idea
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 md:py-24 px-4">
          <div className="mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How Our AI Validator Works</h2>
              <p className="text-gray-300">
                Our AI team analyzes your startup idea from multiple perspectives to provide actionable insights and recommendations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-startup-gray/20 p-8 rounded-lg border border-gray-700 hover:border-startup-blue transition-all group relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-startup-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0.5 border border-transparent group-hover:border-startup-blue/30 rounded-lg transition-all duration-700 pointer-events-none"></div>
                <div className="bg-startup-blue/20 p-3 rounded-full w-fit mb-6 group-hover:bg-[conic-gradient(from_180deg_at_50%_50%,_rgba(59,130,246,0.4)_0deg,_rgba(96,165,250,0.4)_180deg)] transition-all duration-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Brain className="text-startup-blue h-8 w-8 group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-700 relative z-10" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-startup-blue group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] transition-all duration-700">1. Share Your Idea</h3>
                <p className="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-700">
                  Tell us about your product, target market, and business model using our comprehensive questionnaire.
                </p>
              </div>
              
              <div className="bg-startup-gray/20 p-8 rounded-lg border border-gray-700 hover:border-startup-blue transition-all group relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-startup-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0.5 border border-transparent group-hover:border-startup-blue/30 rounded-lg transition-all duration-700 pointer-events-none"></div>
                <div className="bg-startup-blue/20 p-3 rounded-full w-fit mb-6 group-hover:bg-[conic-gradient(from_180deg_at_50%_50%,_rgba(59,130,246,0.4)_0deg,_rgba(96,165,250,0.4)_180deg)] transition-all duration-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <LineChart className="text-startup-blue h-8 w-8 group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-700 relative z-10" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-startup-blue group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] transition-all duration-700">2. AI Analysis</h3>
                <p className="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-700">
                  Our sophisticated AI algorithm analyzes market potential, competition, and business viability.
                </p>
              </div>
              
              <div className="bg-startup-gray/20 p-8 rounded-lg border border-gray-700 hover:border-startup-blue transition-all group relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-startup-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0.5 border border-transparent group-hover:border-startup-blue/30 rounded-lg transition-all duration-700 pointer-events-none"></div>
                <div className="bg-startup-blue/20 p-3 rounded-full w-fit mb-6 group-hover:bg-[conic-gradient(from_180deg_at_50%_50%,_rgba(59,130,246,0.4)_0deg,_rgba(96,165,250,0.4)_180deg)] transition-all duration-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CheckCircle className="text-startup-blue h-8 w-8 group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-700 relative z-10" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-startup-blue group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] transition-all duration-700">3. Get Validation</h3>
                <p className="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-700">
                  Receive detailed feedback, recommendations, and an investment potential score for your idea.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 px-4">
          <div className="mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Startup Validation</h2>
              <p className="text-gray-300">
                Our AI provides a thorough evaluation of your startup idea, giving you actionable insights to improve your chances of success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-startup-gray/20 border-gray-700 hover:border-startup-blue transition-all group relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-startup-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0.5 border border-transparent group-hover:border-startup-blue/30 rounded-lg transition-all duration-700 pointer-events-none"></div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-startup-blue/20 p-3 rounded-full group-hover:bg-[conic-gradient(from_180deg_at_50%_50%,_rgba(59,130,246,0.4)_0deg,_rgba(96,165,250,0.4)_180deg)] transition-all duration-700 relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Users className="text-startup-blue h-6 w-6 group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-700 relative z-10" />
                    </div>
                    <CardTitle className="text-white group-hover:text-startup-blue group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] transition-all duration-700">Market Analysis</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-700">
                    Comprehensive assessment of your target market size, growth potential, and customer pain points. We analyze market trends to help you understand if your timing is right.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-startup-gray/20 border-gray-700 hover:border-startup-blue transition-all group relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-startup-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0.5 border border-transparent group-hover:border-startup-blue/30 rounded-lg transition-all duration-700 pointer-events-none"></div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-startup-blue/20 p-3 rounded-full group-hover:bg-[conic-gradient(from_180deg_at_50%_50%,_rgba(59,130,246,0.4)_0deg,_rgba(96,165,250,0.4)_180deg)] transition-all duration-700 relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Shield className="text-startup-blue h-6 w-6 group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-700 relative z-10" />
                    </div>
                    <CardTitle className="text-white group-hover:text-startup-blue group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] transition-all duration-700">Competitive Analysis</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-700">
                    Evaluate your position against direct and indirect competitors. Identify unique selling points and potential barriers to entry in your chosen market.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-startup-gray/20 border-gray-700 hover:border-startup-blue transition-all group relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-startup-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0.5 border border-transparent group-hover:border-startup-blue/30 rounded-lg transition-all duration-700 pointer-events-none"></div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-startup-blue/20 p-3 rounded-full group-hover:bg-[conic-gradient(from_180deg_at_50%_50%,_rgba(59,130,246,0.4)_0deg,_rgba(96,165,250,0.4)_180deg)] transition-all duration-700 relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <LineChart className="text-startup-blue h-6 w-6 group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-700 relative z-10" />
                    </div>
                    <CardTitle className="text-white group-hover:text-startup-blue group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] transition-all duration-700">Business Model Evaluation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-700">
                    Analysis of your revenue model, pricing strategy, and unit economics. We help you understand if your business can achieve sustainable growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-startup-gray/20 border-gray-700 hover:border-startup-blue transition-all group relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-startup-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0.5 border border-transparent group-hover:border-startup-blue/30 rounded-lg transition-all duration-700 pointer-events-none"></div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-startup-blue/20 p-3 rounded-full group-hover:bg-[conic-gradient(from_180deg_at_50%_50%,_rgba(59,130,246,0.4)_0deg,_rgba(96,165,250,0.4)_180deg)] transition-all duration-700 relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Rocket className="text-startup-blue h-6 w-6 group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-700 relative z-10" />
                    </div>
                    <CardTitle className="text-white group-hover:text-startup-blue group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] transition-all duration-700">Investment Potential</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-700">
                    Evaluate your startup's funding potential based on market size, innovation factor, team composition, and current traction metrics.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Link to="/ai-validator">
                <Button className="bg-startup-blue hover:bg-startup-darkBlue text-white px-8 py-6 text-lg">
                  Validate My Idea Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 md:py-24 px-4">
          <div className="mx-auto">
            <SuccessStories />
          </div>
        </section>

        {/* Review Form Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold !text-white mb-4">Help Us Improve</h2>
              <p className="text-gray-300">
                Your feedback is invaluable to us. Share your thoughts on our AI validator to help us make it even better for your needs.
              </p>
            </div>
            <ReviewForm />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Validate Your Startup Idea?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Get started today and receive comprehensive feedback on your startup idea's potential.
            </p>
            <Link to="/ai-validator">
              <Button className="bg-startup-blue hover:bg-startup-darkBlue text-white px-8 py-6 text-lg">
                Validate My Idea
                <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-gray-800">
          <div className="mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <Logo />
                <p className="mt-4 text-gray-400">
                  AI-powered startup idea validation to help entrepreneurs succeed.
                </p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-startup-blue transition-colors">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-startup-blue transition-colors">Case Studies</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-startup-blue transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-startup-blue transition-colors">Guides</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-startup-blue transition-colors">Support</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-startup-blue transition-colors">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-startup-blue transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-startup-blue transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0"> 2025 Startup Idea Validator. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-startup-blue transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-startup-blue transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;

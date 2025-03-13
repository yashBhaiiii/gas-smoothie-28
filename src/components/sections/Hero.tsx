
import { Button } from "../ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-4 md:px-6 overflow-hidden relative purple-gradient">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-black/40 z-[-1]" />
      
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl opacity-20 z-[-1] animate-pulse-subtle" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl opacity-20 z-[-1] animate-pulse-subtle" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Code Icon */}
          <div className="mb-8 animate-fade-in">
            <div className="w-16 h-20 border-2 border-purple-400 rounded-lg flex items-center justify-center mx-auto">
              <div className="text-purple-400 text-2xl">{`{ }`}</div>
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight mb-6 animate-fade-in text-balance text-white" style={{ animationDelay: "0.1s" }}>
            Smart Contract <span className="text-gradient">Copilot</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10 animate-fade-in text-balance" style={{ animationDelay: "0.2s" }}>
            Create, audit, and deploy secure smart contracts without writing code. Perfect for developers and entrepreneurs.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="group bg-purple-600 hover:bg-purple-700">
              Start Building
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="group border-purple-400/30 text-white hover:bg-purple-800/40">
              <Play size={16} className="mr-2" />
              Watch Demo
            </Button>
          </div>
          
          {/* Feature Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <FeatureCard title="No-Code Builder" description="Create smart contracts using our intuitive drag-and-drop interface." />
            <FeatureCard title="Security First" description="Automated security audits and best practices built-in." />
            <FeatureCard title="Multi-Chain" description="Deploy to Ethereum, Polygon, BSC, and more with one click." />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-secondary/40 backdrop-blur-sm border border-white/5 p-6 rounded-2xl text-center transform transition-transform hover:scale-105">
      <div className="text-xl font-bold text-white mb-2">{title}</div>
      <div className="text-sm text-gray-300">{description}</div>
    </div>
  );
};

export default Hero;

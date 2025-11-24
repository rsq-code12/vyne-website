import React from 'react';
import { BrainCircuit, ScanLine, Zap, Shield, Wifi, Code2 } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const features = [
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "Long-Term AI Memory",
    desc: "Your AI remembers meetings, notes, ideas, and projects forever."
  },
  {
    icon: <ScanLine className="w-6 h-6" />,
    title: "Smart Capture",
    desc: "Automatically captures important context across apps and documents."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Recall",
    desc: "Ask anything—VYNE brings back the missing context instantly."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Local + Private",
    desc: "Runs on your device with full encryption. No data leaves your machine."
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Offline Mode",
    desc: "Works perfectly even without internet connection."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Developer-Friendly",
    desc: "Will come with robust APIs for custom integrations."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-vyne-bg">
      <div className="container mx-auto px-4">
        <FadeIn>
            <h2 className="text-3xl font-bold mb-16 text-center">Engineered for <span className="text-vyne-neon">Intelligence</span></h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-xl bg-vyne-card border border-white/5 hover:border-vyne-neon/50 transition-all duration-300 group h-full">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white mb-6 group-hover:bg-vyne-neon group-hover:text-black transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
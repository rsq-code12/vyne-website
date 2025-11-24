import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-vyne-dark border-t border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Join the <span className="text-vyne-neon">Beta Team</span></h2>
            <p className="text-gray-400">Limited time offer during active development.</p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          
          {/* Active Offer */}
          <FadeIn className="order-1 lg:order-1">
            <div className="bg-[#111] border-2 border-vyne-neon p-8 rounded-2xl shadow-[0_0_40px_rgba(0,255,127,0.15)] relative transform scale-100 lg:scale-105">
              <div className="absolute top-0 right-0 bg-vyne-neon text-black text-xs font-bold px-3 py-1 rounded-bl-lg">LIMITED TIME</div>
              
              <h3 className="text-xl font-mono text-vyne-neon mb-2">BETA LIFETIME ACCESS</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold text-white">$40</span>
                <span className="text-gray-500">/ once</span>
              </div>
              
              <p className="text-sm text-gray-400 mb-8 border-b border-gray-800 pb-8">
                Pay once. Own it forever. Save 80% compared to launch pricing.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "One-time payment, lifetime usage",
                  "Weekly ZIP builds & updates",
                  "Access to all future releases",
                  "VIP feedback channel",
                  "Access to Vyaso AI Copilot",
                  "No subscription ever"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-vyne-neon flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button variant="primary" fullWidth>
                Get Lifetime Access — $40
              </Button>
            </div>
          </FadeIn>

          {/* Future Pricing */}
          <FadeIn delay={0.2} className="order-2 lg:order-2">
            <div className="bg-vyne-bg border border-gray-800 p-8 rounded-2xl opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <h3 className="text-xl font-mono text-gray-400 mb-2">FUTURE PRICING</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">$20</span>
                <span className="text-gray-500">/ month</span>
              </div>
              
              <p className="text-sm text-gray-500 mb-8 border-b border-gray-800 pb-8">
                This will be the standard subscription rate after VYNE's public release in January.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Monthly subscription fee",
                  "Standard support",
                  "Cloud features optional add-on"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="w-4 h-4 rounded-full border border-gray-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="w-full py-3 text-center text-gray-600 font-mono text-sm border border-gray-800 rounded">
                Coming January 2026
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
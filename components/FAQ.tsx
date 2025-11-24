import React from 'react';
import { FadeIn } from './ui/FadeIn';

const faqs = [
  {
    q: "Is VYNE stable?",
    a: "It’s in production. Features are coming online weekly. While the core is stable, expect rapid iteration on UI and integrations."
  },
  {
    q: "What do beta users get?",
    a: "Lifetime access for a one-time fee, all manual ZIP updates, access to early features, and the ability to directly influence the product roadmap."
  },
  {
    q: "Will my data be safe?",
    a: "Yes — absolute privacy is our core tenet. Everything runs locally on your machine with full encryption. We cannot see your data."
  },
  {
    q: "Do I pay again after launch?",
    a: "No. Beta members get lifetime access honored forever. You will never pay a monthly subscription."
  }
];

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-vyne-bg">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-center font-mono">FAQ</h2>
        </FadeIn>
        
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-vyne-card border border-white/5 p-6 rounded-lg hover:border-white/10 transition-colors">
                <h3 className="text-white font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
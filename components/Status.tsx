import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './ui/FadeIn';
import { ProgressItem } from '../types';

const progressData: ProgressItem[] = [
  { label: 'Core Neural Engine', percentage: 90 },
  { label: 'Smart Capture Tools', percentage: 70 },
  { label: 'Vyaso AI Copilot', percentage: 60 },
];

const ProgressBar: React.FC<ProgressItem> = ({ label, percentage }) => (
  <div className="mb-8 last:mb-0">
    <div className="flex justify-between mb-2 text-sm font-mono">
      <span className="text-gray-300 uppercase">{label}</span>
      <span className="text-vyne-neon">{percentage}%</span>
    </div>
    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="h-full bg-vyne-neon shadow-[0_0_10px_rgba(0,255,127,0.5)]"
      />
    </div>
  </div>
);

export const Status: React.FC = () => {
  return (
    <section className="py-24 bg-vyne-bg relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-vyne-neon/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We Are Building <br />
                <span className="text-vyne-neon">VYNE Right Now</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Development is happening at full speed. Over the next 30 days, we will be completing the core neural engine, capture tools, and the Vyaso AI Copilot.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 border-l-2 border-vyne-neon pl-4">
                By joining the beta, you’ll receive every internal build (ZIP file) and help shape VYNE with feedback and testing.
              </p>
              
              <div className="inline-block px-4 py-2 border border-vyne-neon text-vyne-neon text-sm font-bold uppercase tracking-wider bg-vyne-neon/5 rounded">
                Beta Members = Early Access + Direct Influence
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-vyne-card p-8 rounded-2xl border border-white/5 shadow-2xl">
              <h3 className="text-sm font-mono text-gray-500 mb-8 border-b border-gray-800 pb-2">
                SYSTEM STATUS // ACTIVE PRODUCTION
              </h3>
              {progressData.map((item, index) => (
                <ProgressBar key={index} {...item} />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const Roadmap: React.FC = () => {
  return (
    <section className="py-20 bg-vyne-card border-y border-white/5">
      <div className="container mx-auto px-4">
        <FadeIn>
            <h2 className="text-2xl font-bold mb-12 text-center font-mono tracking-widest text-gray-500">LIFETIME ACCESS — WHAT YOU GET</h2>
        </FadeIn>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <FadeIn delay={0.1}>
            <div className="flex gap-6 group">
                <div className="w-24 pt-1 text-right font-mono text-vyne-neon font-bold">NOW</div>
                <div className="relative pb-8 border-l border-vyne-neon pl-8">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-vyne-neon shadow-[0_0_10px_rgba(0,255,127,0.8)]"></div>
                    <h3 className="text-white font-bold text-lg">Immediate Lifetime Access</h3>
                    <p className="text-gray-400 text-sm mt-1">Purchase today to lock in lifetime access to VYNE.</p>
                </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex gap-6 group">
                <div className="w-24 pt-1 text-right font-mono text-white">SUBSCRIBE</div>
                <div className="relative pb-8 border-l border-gray-700 pl-8 group-hover:border-gray-500 transition-colors">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-700 group-hover:bg-white transition-colors"></div>
                    <h3 className="text-gray-200 font-bold text-lg">Instant Test Builds (ZIP)</h3>
                    <p className="text-gray-500 text-sm mt-1">Receive ZIP files immediately and send your review via email.</p>
                </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex gap-6 group">
                <div className="w-24 pt-1 text-right font-mono text-gray-500">UPDATES</div>
                <div className="relative pb-8 border-l border-gray-800 pl-8">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-600"></div>
                    <h3 className="text-gray-500 font-bold text-lg">Every Version Delivered</h3>
                    <p className="text-gray-600 text-sm mt-1">Each product update is emailed directly to your inbox.</p>
                </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex gap-6 group">
                <div className="w-24 pt-1 text-right font-mono text-gray-500">LAUNCH</div>
                <div className="relative border-l border-gray-800 pl-8">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-600"></div>
                    <h3 className="text-gray-500 font-bold text-lg">Lifetime After Public Release</h3>
                    <p className="text-gray-600 text-sm mt-1">Enjoy lifetime subscription post‑launch without additional costs.</p>
                </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
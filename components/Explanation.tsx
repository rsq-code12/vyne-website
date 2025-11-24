import React from 'react';
import { Layers, HardDrive, WifiOff } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Explanation: React.FC = () => {
  return (
    <section className="py-24 bg-vyne-dark border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 text-center font-mono">
              <span className="text-vyne-neon">//</span> WHAT IS VYNE?
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-300">
                  <strong className="text-white">VYNE</strong> is a personal long-term memory engine for your AI. 
                  It quietly analyzes your work—documents, chats, research, links—and stores important information securely on your device.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  When you ask your AI something later, VYNE reminds it instantly so you never lose context.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-4">
              <FadeIn delay={0.2}>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-vyne-card border border-white/5 hover:border-vyne-neon/30 transition-colors">
                  <div className="bg-vyne-neon/10 p-2 rounded text-vyne-neon">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Universal Compatibility</h3>
                    <p className="text-sm text-gray-400">Works with any AI tool or copilot you already use.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-vyne-card border border-white/5 hover:border-vyne-neon/30 transition-colors">
                  <div className="bg-vyne-neon/10 p-2 rounded text-vyne-neon">
                    <HardDrive className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">100% Local Storage</h3>
                    <p className="text-sm text-gray-400">Your data never leaves your machine. Full privacy.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-vyne-card border border-white/5 hover:border-vyne-neon/30 transition-colors">
                  <div className="bg-vyne-neon/10 p-2 rounded text-vyne-neon">
                    <WifiOff className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">No Subscriptions</h3>
                    <p className="text-sm text-gray-400">No cloud fees. No servers. Lifetime means lifetime.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
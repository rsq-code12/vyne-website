import React from 'react';
import { Database, Monitor, MessageSquare, Cloud } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Ecosystem: React.FC = () => {
  return (
    <section className="py-24 bg-vyne-dark border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-mono uppercase text-gray-200">The Vyne Ecosystem</h2>
          </div>
        </FadeIn>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Step 1: Capture */}
            <FadeIn delay={0.1} className="h-full">
              <div className="bg-vyne-bg border border-gray-800 p-6 rounded-lg h-full flex flex-col items-center text-center hover:border-gray-600 transition-colors">
                <div className="bg-gray-800 p-3 rounded-full mb-4 text-gray-300">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold mb-2">Capture Tools</h3>
                <p className="text-xs text-gray-400">Browser extension, Desktop App, VSCode plugin</p>
              </div>
            </FadeIn>

            {/* Step 2: Core (Highlighted) */}
            <FadeIn delay={0.2} className="h-full md:col-span-2">
              <div className="bg-vyne-card border border-vyne-neon p-8 rounded-xl h-full flex flex-col items-center text-center shadow-[0_0_30px_rgba(0,255,127,0.1)] relative">
                <div className="absolute -top-3 bg-vyne-neon text-black text-xs font-bold px-3 py-1 rounded-full">CORE</div>
                <div className="bg-vyne-neon p-4 rounded-full mb-4 text-black neon-shadow">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">VYNE Neural Engine</h3>
                <p className="text-sm text-gray-400">Local AI memory engine that processes, indexes, and retrieves context securely.</p>
              </div>
            </FadeIn>

            {/* Step 3: Output */}
            <FadeIn delay={0.3} className="h-full">
               {/* Grid for multiple outputs */}
              <div className="flex flex-col gap-4 h-full">
                <div className="bg-vyne-bg border border-gray-800 p-4 rounded-lg flex-1 flex flex-col items-center text-center">
                    <div className="bg-gray-800 p-2 rounded-full mb-2 text-gray-300">
                    <MessageSquare className="w-5 h-5" />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1">Vyaso Copilot</h3>
                    <p className="text-[10px] text-gray-500">Context-aware answers</p>
                </div>
                <div className="bg-vyne-bg border border-gray-800 p-4 rounded-lg flex-1 flex flex-col items-center text-center ">
                    <div className="bg-gray-800 p-2 rounded-full mb-2 text-gray-300">
                    <Cloud className="w-5 h-5" />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1">Future API</h3>
                    <p className="text-[10px] text-gray-500">Team sync & Cloud</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
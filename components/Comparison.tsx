import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { motion } from 'framer-motion';
import { Timer, Cloud, MessageSquare, BrainCircuit, Database, Shield, Zap, Monitor } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-vyne-dark border-y border-white/5 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12 text-center font-mono">
            <span className="text-vyne-neon">//</span> WHY VYNE IS DIFFERENT
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <FadeIn>
            <div>
              <h3 className="text-xs font-mono text-gray-500 mb-4">LLMS TODAY</h3>
              <div className="space-y-4">
                <article className="flex items-start gap-4 p-4 rounded-lg bg-vyne-bg border border-white/5">
                  <div className="bg-gray-800 p-2 rounded text-gray-300">
                    <Timer className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Session‑Bound</h4>
                    <p className="text-xs text-gray-400">Forgets when the chat ends.</p>
                  </div>
                </article>
                <article className="flex items-start gap-4 p-4 rounded-lg bg-vyne-bg border border-white/5">
                  <div className="bg-gray-800 p-2 rounded text-gray-300">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Limited Context Window</h4>
                    <p className="text-xs text-gray-400">Can’t recall months of work.</p>
                  </div>
                </article>
                <article className="flex items-start gap-4 p-4 rounded-lg bg-vyne-bg border border-white/5">
                  <div className="bg-gray-800 p-2 rounded text-gray-300">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Cloud‑Centric</h4>
                    <p className="text-xs text-gray-400">Data lives on servers.</p>
                  </div>
                </article>
                <article className="flex items-start gap-4 p-4 rounded-lg bg-vyne-bg border border-white/5">
                  <div className="bg-gray-800 p-2 rounded text-gray-300">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">One‑Shot Prompting</h4>
                    <p className="text-xs text-gray-400">You must supply context every time.</p>
                  </div>
                </article>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-xs font-mono text-vyne-neon mb-4">VYNE NEURAL ENGINE</h3>
              <div className="space-y-4">
                <article className="flex items-start gap-4 p-4 rounded-lg bg-vyne-card border border-vyne-neon/40 hover:border-vyne-neon/70 transition-colors">
                  <div className="bg-vyne-neon/10 p-2 rounded text-vyne-neon">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Persistent Memory</h4>
                    <p className="text-xs text-gray-400">Learns and remembers over time.</p>
                  </div>
                </article>
                <article className="flex items-start gap-4 p-4 rounded-lg bg-vyne-card border border-vyne-neon/40 hover:border-vyne-neon/70 transition-colors">
                  <div className="bg-vyne-neon/10 p-2 rounded text-vyne-neon">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">True Recall</h4>
                    <p className="text-xs text-gray-400">Retrieves exact context when you ask.</p>
                  </div>
                </article>
                <article className="flex items-start gap-4 p-4 rounded-lg bg-vyne-card border border-vyne-neon/40 hover:border-vyne-neon/70 transition-colors">
                  <div className="bg-vyne-neon/10 p-2 rounded text-vyne-neon">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Local + Private</h4>
                    <p className="text-xs text-gray-400">Data stays on your device.</p>
                  </div>
                </article>
                <article className="flex items-start gap-4 p-4 rounded-lg bg-vyne-card border border-vyne-neon/40 hover:border-vyne-neon/70 transition-colors">
                  <div className="bg-vyne-neon/10 p-2 rounded text-vyne-neon">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Automatic Injection</h4>
                    <p className="text-xs text-gray-400">Feeds your AI the missing context.</p>
                  </div>
                </article>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <FadeIn>
            <h3 className="text-sm font-mono text-gray-500 text-center mb-8">HOW IT WORKS</h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <FadeIn delay={0.05}>
              <div className="p-6 rounded-xl bg-vyne-bg border border-white/5 text-center">
                <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300">
                  <Monitor className="w-5 h-5" />
                </div>
                <div className="text-white font-bold text-sm mb-1">Capture</div>
                <div className="text-[12px] text-gray-400">Browser, desktop, plugins.
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="p-8 rounded-xl bg-vyne-card border border-vyne-neon text-center shadow-[0_0_30px_rgba(0,255,127,0.15)]">
                <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-vyne-neon/15 flex items-center justify-center text-vyne-neon">
                  <Database className="w-6 h-6" />
                </div>
                <div className="text-white font-bold mb-1">VYNE Neural Engine</div>
                <div className="text-[12px] text-gray-400">Processes, indexes, personal knowledge map.</div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="p-6 rounded-xl bg-vyne-bg border border-white/5 text-center">
                <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-white font-bold text-sm mb-1">Context Injection</div>
                <div className="text-[12px] text-gray-400">Any AI/Copilot, instantly.</div>
              </div>
            </FadeIn>
          </div>

          <motion.div
            className="hidden md:block absolute left-1/6 right-1/6 top-1/2 h-px bg-gradient-to-r from-vyne-neon/0 via-vyne-neon/60 to-vyne-neon/0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Brain, Cpu, Fingerprint, ChevronRight, Zap } from 'lucide-react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-vyne-neon/5 to-transparent pointer-events-none"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-vyne-neon/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-vyne-neon/10 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-vyne-neon/30 bg-vyne-neon/5 text-vyne-neon text-xs font-mono uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vyne-neon opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-vyne-neon"></span>
                </span>
                Active Development
            </div>
        </FadeIn>

        <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Your AI’s <span className="text-vyne-neon neon-text-shadow">Long-Term Memory</span><br />
            Coming to Life.
            </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
            The <span className="text-white font-semibold">Vyaso Neural Engine</span> is actively in development. 
            Join the beta team, shape the product, and access the full lifetime release.
            </p>
        </FadeIn>

        <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button variant="primary">
                Get Lifetime Beta Access — $40
            </Button>
            <Button variant="secondary">
                Join Beta <ChevronRight className="w-4 h-4" /> Updates
            </Button>
            </div>
        </FadeIn>

        <FadeIn delay={0.4}>
            <p className="text-xs font-mono text-vyne-muted mb-16">
            “VYNE is in active production. Beta members receive updated ZIP builds weekly.”
            </p>
        </FadeIn>

        <FadeIn delay={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 200 }} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-vyne-card/50 border border-white/5 backdrop-blur-sm">
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                  <Brain className="w-8 h-8 text-vyne-neon" />
                </motion.div>
                <h3 className="text-sm font-bold uppercase tracking-wider">Learns Workflow</h3>
                <p className="text-xs text-gray-400">Quietly analyzes your documents and chats.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 200 }} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-vyne-card/50 border border-white/5 backdrop-blur-sm">
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
                  <Cpu className="w-8 h-8 text-vyne-neon" />
                </motion.div>
                <h3 className="text-sm font-bold uppercase tracking-wider">True Context</h3>
                <p className="text-xs text-gray-400">Understands exactly what to remember.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 200 }} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-vyne-card/50 border border-white/5 backdrop-blur-sm">
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                  <Fingerprint className="w-8 h-8 text-vyne-neon" />
                </motion.div>
                <h3 className="text-sm font-bold uppercase tracking-wider">Truly Personal</h3>
                <p className="text-xs text-gray-400">Makes your AI an extension of you.</p>
            </motion.div>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};
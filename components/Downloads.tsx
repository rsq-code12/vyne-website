import React from 'react';
import { Apple, Monitor, CreditCard, X } from 'lucide-react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';

export const Downloads: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <section className="py-20 bg-vyne-bg">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8 font-mono">INSTALL BETA BUILDS</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button variant="outline" className="min-w-[200px]" onClick={() => setShowModal(true)}>
              <Monitor className="w-4 h-4" /> Windows (x64)
            </Button>
            <Button variant="outline" className="min-w-[200px]" onClick={() => setShowModal(true)}>
              <Apple className="w-4 h-4" /> Mac (Intel)
            </Button>
            <Button variant="outline" className="min-w-[200px]" onClick={() => setShowModal(true)}>
              <Apple className="w-4 h-4" /> Mac (Silicon)
            </Button>
          </div>

          <p className="text-sm text-vyne-muted max-w-md mx-auto">
            Beta builds are updated frequently. You’ll receive new ZIP files via email as we ship improvements each week.
          </p>
        </FadeIn>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-md bg-vyne-card border border-vyne-neon/40 rounded-lg p-6 sm:p-8 shadow-[0_0_25px_rgba(0,255,127,0.3)]">
              <button aria-label="Close" className="absolute right-3 top-3 text-gray-400 hover:text-white" onClick={() => setShowModal(false)}>
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="w-5 h-5 text-vyne-neon" />
                <h3 className="font-mono text-white text-lg font-bold">Lifetime Beta Access</h3>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Get lifetime beta access for <span className="text-vyne-neon font-semibold">$40</span>. Receive weekly builds and priority support.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="primary" 
                  fullWidth 
                  onClick={() => {
                    window.location.href = 
                      'mailto:support@vyasolabs.com?subject=Lifetime%20Beta%20Access%20-%20$40&body=Hi%20team,%0D%0A%0D%0AI%20would%20like%20to%20purchase%20lifetime%20beta%20access%20for%20$40.%20Please%20send%20me%20payment%20instructions.%0D%0A%0D%0AThanks!';
                    setShowModal(false);
                  }}
                >
                  Request Access — $40
                </Button>
                <Button variant="outline" fullWidth onClick={() => setShowModal(false)}>Cancel</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
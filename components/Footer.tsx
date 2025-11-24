import React from 'react';
import { ArrowRight, Twitter, Github, Mail } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-vyne-dark border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        
        {/* Email Capture */}
        <div className="max-w-xl mx-auto text-center mb-20">
          <h3 className="text-white font-bold mb-4">Not ready yet?</h3>
          <p className="text-gray-400 mb-6 text-sm">Get updates on VYNE progress without joining the beta.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-vyne-neon transition-colors"
            />
            <Button variant="secondary" className="px-6">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-t border-gray-800 pt-12">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-2xl font-bold font-mono tracking-tighter text-white mb-4">VYNE</h4>
            <p className="text-gray-500 text-sm max-w-xs">
              A Vyaso Labs Product. <br />
              Building the memory layer for the future of artificial intelligence.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Links</h5>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-vyne-neon cursor-pointer">Manifesto</li>
              <li className="hover:text-vyne-neon cursor-pointer">Pricing</li>
              <li className="hover:text-vyne-neon cursor-pointer">Login</li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Connect</h5>
            <div className="flex gap-4 text-gray-500">
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
              <Github className="w-5 h-5 hover:text-white cursor-pointer" />
              <Mail className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>
            <div className="mt-4 text-xs text-gray-600">
              support@vyasolabs.com
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2024 Vyaso Labs. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
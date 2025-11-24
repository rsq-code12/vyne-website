import React from 'react';
import { Hero } from './components/Hero';
import { Explanation } from './components/Explanation';
import { Status } from './components/Status';
import { Comparison } from './components/Comparison';
import { Ecosystem } from './components/Ecosystem';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Downloads } from './components/Downloads';
import { Roadmap } from './components/Roadmap';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-vyne-text bg-vyne-bg selection:bg-vyne-neon selection:text-black">
      <Hero />
      <Explanation />
      <Comparison />
      <Status />
      <Ecosystem />
      <Features />
      <Pricing />
      <Downloads />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
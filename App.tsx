import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Deliverables } from './components/Deliverables';
import { WhatsIncluded } from './components/WhatsIncluded';
import { Mentor } from './components/Mentor';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { StickyBar } from './components/StickyBar';
import { WhoIsThisFor } from './components/WhoIsThisFor';

const App: React.FC = () => {
  return (
    <main className="min-h-screen font-sans text-slate-900 bg-white pb-20 md:pb-0"> {/* Padding bottom for mobile sticky bar clearance if needed */}
      <Hero />
      <PainPoints />
      <WhoIsThisFor />
      <Solution />
      <WhatsIncluded />
      <Deliverables />
      <Mentor />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <WhatsAppButton />
      <StickyBar />
    </main>
  );
};

export default App;
import Navigation from '@/components/Navigation';
import StickyCTA from '@/components/StickyCTA';
import Hero from '@/sections/Hero';
import Problem from '@/sections/Problem';
import Shift from '@/sections/Shift';
import Solution from '@/sections/Solution';
import PromptComparison from '@/sections/PromptComparison';
import WhatsInside from '@/sections/WhatsInside';
import WhoFor from '@/sections/WhoFor';
import Offer from '@/sections/Offer';
import FinalCTA from '@/sections/FinalCTA';
import FAQ from '@/sections/FAQ';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen bg-warm-white">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Shift />
        <Solution />
        <PromptComparison />
        <WhatsInside />
        <WhoFor />
        <Offer />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;

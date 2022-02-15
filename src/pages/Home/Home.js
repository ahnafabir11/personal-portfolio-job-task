import React from 'react';
import TopBanner from '../../components/TopBanner';
import Services from '../../components/Services';
import Portfolio from '../../components/Portfolio';
import About from '../../components/About';
import Features from '../../components/Features';

const Home = () => {
  return (
    <main>
      <TopBanner />
      <Services />
      <Portfolio />
      <About />
      <Features />
      
      {/* testimonials */}
      {/* faq */}
      {/* our blog */}
      {/* contact */}
      {/* bottom banner */}
      {/* footer */}
    </main>
  );
};

export default Home;
import React from 'react';
import TopBanner from '../../components/TopBanner';
import Services from '../../components/Services';
import Portfolio from '../../components/Portfolio';
import About from '../../components/About';
import Features from '../../components/Features';
import Testimonial from '../../components/Testimonial';
import Faq from '../../components/Faq';
import Blog from '../../components/Blog';
import Contact from '../../components/Contact';

const Home = () => {
  return (
    <main>
      <TopBanner />
      <Services />
      <Portfolio />
      <About />
      <Features />
      <Testimonial />
      <Faq />
      <Blog />
      <Contact />
      
      {/* bottom banner */}
      {/* footer */}
    </main>
  );
};

export default Home;
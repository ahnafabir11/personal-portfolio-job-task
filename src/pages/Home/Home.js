import React from 'react';
import TopBanner from '../../components/home/TopBanner';
import Services from '../../components/home/Services';
import Portfolio from '../../components/home/Portfolio';
import About from '../../components/home/About';
import Features from '../../components/home/Features';
import Testimonial from '../../components/home/Testimonial';
import Faq from '../../components/home/Faq';
import Blog from '../../components/home/Blog';
import Contact from '../../components/home/Contact';
import BottomBanner from '../../components/home/BottomBanner';
import Footer from '../../components/common/Footer';

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
      <BottomBanner/>
      <Footer />
    </main>
  );
};

export default Home;
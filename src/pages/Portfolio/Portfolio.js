import React from 'react';
import PortBtmBanner from '../../components/PortBtmBanner';
import PortfolioBanner from '../../components/PortfolioBanner';
import PortfolioList from '../../components/PortfolioList';
import Footer from './../../components/Footer';

const Portfolio = () => {
  return (
    <main>
      <PortfolioBanner />
      <PortfolioList />
      <PortBtmBanner />
      <Footer light={true} />
    </main>
  );
};

export default Portfolio;
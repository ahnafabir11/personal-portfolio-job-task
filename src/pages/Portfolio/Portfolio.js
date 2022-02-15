import React from 'react';
import PortBtmBanner from '../../components/portfolio/PortBtmBanner';
import PortfolioBanner from '../../components/portfolio/PortfolioBanner';
import PortfolioList from '../../components/portfolio/PortfolioList';
import Footer from '../../components/common/Footer';

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
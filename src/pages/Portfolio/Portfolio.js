import React from 'react';
import PortBtmBanner from '../../components/PortBtmBanner';
import PortfolioBanner from '../../components/PortfolioBanner';
import PortfolioList from '../../components/PortfolioList';

const Portfolio = () => {
  return (
    <main>
      <PortfolioBanner />
      <PortfolioList />
      <PortBtmBanner />
      {/* footer */}
    </main>
  );
};

export default Portfolio;
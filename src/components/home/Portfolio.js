import React from 'react';
import portfolio1 from '../../images/portfolio-1.png';
import portfolio2 from '../../images/portfolio-2.png';
import portfolio3 from '../../images/portfolio-3.png';
import ProjectBox from '../common/ProjectBox';

const workList = [
  {
    id: 1,
    tagName: "Design",
    title: "SOFA",
    bgImage: portfolio1,
  },
  {
    id: 2,
    tagName: "Branding",
    title: "KeyBoard",
    bgImage: portfolio2,
  },
  {
    id: 3,
    tagName: "Illustration",
    title: "Work Media",
    bgImage: portfolio3,
  },
]

const Portfolio = () => {
  return (
    <section className="container py-20">
      <h6 className="text-[#EF6D58]">PORTFOLIO</h6>
      <div className="flex justify-between mb-16">
        <h2 className="section-title-light">Latest Work</h2>
        <button className="transparent-btn">explore now</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {
          workList.map(work =>
            <ProjectBox
              key={work.id}
              tagName={work.tagName}
              title={work.title}
              bgImage={work.bgImage}
            />
          )
        }
      </div>
    </section>
  );
};

export default Portfolio;
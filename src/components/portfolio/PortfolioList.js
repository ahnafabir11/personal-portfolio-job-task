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
  {
    id: 6,
    tagName: "Illustration",
    title: "Work Media",
    bgImage: portfolio3,
  },
  {
    id: 4,
    tagName: "Design",
    title: "SOFA",
    bgImage: portfolio1,
  },
  {
    id: 5,
    tagName: "Branding",
    title: "KeyBoard",
    bgImage: portfolio2,
  },
  
]

const PortfolioList = () => {
  return (
    <section className="bg-[#FDF0E9]">
      <div className="container">
        {/* portfolio navigation */}
        <div className="max-w-[45%] mx-auto text-[#391400] text-sm font-medium flex justify-evenly py-10">
          <p>Show All<sup>14</sup></p>
          <p>Design<sup>6</sup></p>
          <p>Branding<sup>4</sup></p>
          <p>Illustration<sup>3</sup></p>
          <p>Motion<sup>1</sup></p>
        </div>

        {/* portfolio lists */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            workList.map(work =>
              <ProjectBox
                key={work.id}
                tagName={work.tagName}
                title={work.title}
                bgImage={work.bgImage}
                border={false}
              />
            )
          }
        </div>

        <button className="filled-btn bg-white text-[#391400] block mx-auto mt-10">see more</button>
      </div>
    </section>
  );
};

export default PortfolioList;
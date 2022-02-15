import React from 'react';
import topBannerImage from '../../images/top-banner-image.png';
import { DesktopComputerIcon } from '@heroicons/react/outline';
import { BriefcaseIcon } from '@heroicons/react/outline';
import ExperienceBox from './ExperienceBox';

const experienceList = [
  {
    id: 1,
    Icon: DesktopComputerIcon,
    number: "42%",
    title: "Years of experience"
  },
  {
    Icon: BriefcaseIcon,
    id: 2,
    number: "73+",
    title: "Projects Done"
  },
]

const About = () => {
  return (
    <section className="bg-[#FDF0E9]">
      <div className="container">
        {/* short description */}
        <div className="flex flex-col md:flex-row md:items-center gap-20 md:gap-40 py-8 lg:py-36">
          <div className="flex-1">
            <img src={topBannerImage} alt="" />
          </div>

          <div className="flex-1 space-y-5">
            <h6 className="text-[#EF6D58]">GABRIEL PIRES</h6>
            <h2 className="section-title-dark">Professional <br /> Web Designer</h2>
            <p className="text-[#391400] font-medium">Provides a full service range</p>
            <p className="text-sm text-[#3914007a]">Ability to put themselves in the merchant's shoes. It is <br /> meant to partner on the long run, and work as an extension <br /> of the merchant's team.</p>
            <button className="transparent-btn bg-white text-[#391400]">see my work</button>
          </div>
        </div>

        {/* experience */}
        <div className="flex flex-col md:flex-row gap-1 pb-10 md:pb-20">
          {
            experienceList.map(exp =>
              <ExperienceBox
                key={exp.id}
                Icon={exp.Icon}
                number={exp.number}
                title={exp.title}
              />
            )
          }
        </div>
      </div>
    </section>
  );
};

export default About;
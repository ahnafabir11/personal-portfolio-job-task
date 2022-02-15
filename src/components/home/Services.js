import React from 'react';
import ServiceBox from './ServiceBox';
import { DesktopComputerIcon } from '@heroicons/react/outline';
import { BriefcaseIcon } from '@heroicons/react/outline';

const serviceList = [
  {
    id: 1,
    Icon: DesktopComputerIcon,
    title: "Design",
    description: "Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house."
  },
  {
    Icon: BriefcaseIcon,
    id: 2,
    title: "Development",
    description: "Hire to outsource your digital marketing efforts, instead of handling in-house can provide your business."
  },
]

const Services = () => {
  return (
    <section className="bg-[#FDF0E9] py-8 md:py-16">
      <div className="container">
        {/* titles */}
        <h6 className="text-[#EF6D58] text-center mb-3">SERVICE</h6>
        <h2 className="section-title-dark text-center mb-10 md:mb-16">How I Can Help <br /> You With</h2>

        {/* service boxes */}
        <div className="flex flex-col md:flex-row gap-1">
          {
            serviceList.map(service =>
              <ServiceBox
                key={service.id}
                Icon={service.Icon}
                title={service.title}
                description={service.description}
              />
            )
          }
        </div>

        <p className="text-center text-sm text-[#3914007a] mt-12">
          Want more service? <span className="text-[#391400] font-medium">Explore Now</span>
        </p>
      </div>
    </section>
  );
};

export default Services;
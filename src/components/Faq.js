import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { ChevronDoubleUpIcon } from '@heroicons/react/solid';
import brandImg1 from '../images/brand1.png';
import brandImg2 from '../images/brand2.png';
import brandImg3 from '../images/brand3.png';
import brandImg4 from '../images/brand4.png';
import brandImg5 from '../images/brand5.png';

const questionsList = [
  {
    id: 1,
    title: "A digital agency is a business",
    description: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
  },
  {
    id: 2,
    title: "Hire to outsource your digital",
    description: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
  },
  {
    id: 3,
    title: "Marketing efforts",
    description: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
  },
  {
    id: 4,
    title: "Can provide your business",
    description: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
  },
]

const Faq = () => {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="container py-20">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 space-y-5">
          <h6 className="text-[#EF6D58]">FAQ</h6>
          <h2 className="section-title-light">Frequently Asked <br /> Questions</h2>
          <p className="text-gray-400">A digital agency is a business you hire to outsource your <br /> digital marketing efforts, instead of handling in-house.</p>
          <button className="filled-btn">Contact Me</button>
        </div>

        <div className="flex-1">
          {
            questionsList.map(question =>
              <Accordion
                key={question.id}
                expanded={expanded === `panel${question.id}`}
                onChange={handleChange(`panel${question.id}`)}
                sx={{ border: '1px solid #3A3C56' }}
              >
                <AccordionSummary
                  expandIcon={<ChevronDoubleUpIcon width="30" height="30" color="#EF6D58" />}
                  sx={expanded === `panel${question.id}` ? { bgcolor: "white", color: '#391400' } : { bgcolor: "#28293E", color: 'white' }}
                >
                  <Typography className="font-bold" variant="h6">{question.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{question.description}</Typography>
                </AccordionDetails>
              </Accordion>
            )
          }
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly items-center gap-5 mt-20">
        <img src={brandImg1} alt="" />
        <img src={brandImg2} alt="" />
        <img src={brandImg3} alt="" />
        <img src={brandImg4} alt="" />
        <img src={brandImg5} alt="" />
      </div>
    </section>
  );
};

export default Faq;
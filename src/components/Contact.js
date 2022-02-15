import React from 'react';
import { ClockIcon } from '@heroicons/react/solid';
import { PhoneIcon } from '@heroicons/react/solid';
import { MailIcon } from '@heroicons/react/solid';

const Contact = () => {
  return (
    <section className="container py-20">
      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-20">
        <div className="flex-1 bg-white p-10 rounded-md space-y-5">
          <h5 className="text-[#391400] text-xl font-bold">Get In Touch</h5>

          <form className="flex flex-col space-y-3">
            <input type="text" placeholder="Your email" className="border border-[#ef6c5857] px-4 py-2 rounded" />
            <input type="text" placeholder="Subject" className="border border-[#ef6c5857] px-4 py-2 rounded" />
            <textarea rows="4" placeholder="Message" className="border border-[#ef6c5857] px-4 py-2 rounded"></textarea>
          </form>

          <button className="filled-btn block ml-auto">submit now</button>
        </div>

        <div className="flex-1 space-y-5">
          <h6 className="text-[#EF6D58]">CONTACT</h6>
          <h2 className="section-title-light">Give Your Site <br /> A New Look</h2>
          <p className="text-lg">Service range including technical skills, design, <br /> business understanding.</p>
          <div className="space-y-3">
            <div className="flex items-center gap-5">
              <div className="bg-[#EF6D58] rounded-full p-2">
                <ClockIcon width="20" height="20" color="#fffff" />
              </div>
              <p>2247 Lunetta Street, TX 76301</p>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-[#EF6D58] rounded-full p-2">
                <PhoneIcon width="20" height="20" color="#fffff" />
              </div>
              <p>+1 (234) 567-89-00</p>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-[#EF6D58] rounded-full p-2">
                <MailIcon width="20" height="20" color="#fffff" />
              </div>
              <p>info@agency.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
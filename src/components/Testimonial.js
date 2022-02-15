import React from 'react';
import ReviewBox from './ReviewBox';
import clientImage1 from '../images/client1.png';
import clientImage2 from '../images/client2.png';
import clientImage3 from '../images/client3.png';

const clientReviews = [
  {
    id: 1,
    rating: 5,
    name: "Graham Griffiths",
    occupation: "Twitor",
    review: "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.",
    profileImage: clientImage1,
  },
  {
    id: 2,
    rating: 5,
    name: "Alan Martí",
    occupation: "Meta Inc.",
    review: "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions.",
    profileImage: clientImage2,
    bgWhite: true,
  },
  {
    id: 3,
    rating: 5,
    name: "Richardo Kann",
    occupation: "Photogram",
    review: "Provide your business with a variety of digital solutions to promote your product or service online.",
    profileImage: clientImage3,
  },
]

const Testimonial = () => {
  return (
    <section className="bg-[#FDF0E9] py-16">
      <div className="container">
        <h6 className="text-[#EF6D58] text-center pb-3">TESTIMONIAL</h6>
        <h2 className="section-title-dark text-center pb-10 md:pb-16">What My <br /> Clients Saying</h2>

        <div className="flex flex-col md:flex-row items-start mb-20">
          {
            clientReviews.map(item =>
              <ReviewBox
                key={item.id}
                name={item.name}
                occupation={item.occupation}
                review={item.review}
                rating={item.rating}
                profileImage={item.profileImage}
                bgWhite={item.bgWhite}
              />
            )
          }
        </div>

        <button className="filled-btn bg-white text-[#391400] shadow-md mx-auto block">SEE ALL</button>
      </div>
    </section>
  );
};

export default Testimonial;
import React from 'react';
import blogCover1 from '../../images/blog1.png';
import blogCover2 from '../../images/blog2.png';
import blogCover3 from '../../images/blog3.png';

const blogList = [
  {
    id: 1,
    category: 'Stories',
    title: 'Agency is a business you hire to outsource',
    date: new Date(),
    coverImg: blogCover1,
  },
  {
    id: 2,
    category: 'Design',
    title: 'Outsource you digital marketing efforts',
    date: new Date(),
    coverImg: blogCover2,
  },
  {
    id: 3,
    category: 'Marketing',
    title: 'Your business with a variety of digital',
    date: new Date(),
    coverImg: blogCover3,
  },
]

const Blog = () => {
  return (
    <section className="bg-[#FDF0E9] py-20">
      <div className="container">
        <div className="flex justify-between items-end mb-20">
          <div className="space-y-8">
            <h6 className="text-[#EF6D58]">OUR BLOG</h6>
            <h2 className="section-title-dark">Latest Blog <br /> Articles</h2>
          </div>
          <button className="filled-btn bg-white text-[#391400]">discover all</button>
        </div>

        <div className="grid grid-cols-3 gap-y-16 md:gap-y-10 md:gap-x-16">
          <div className="row-span-3 col-span-3 md:col-span-2 space-y-5">
            <img src={blogList[0].coverImg} alt="" className="w-full" />
            <p className="text-[#391400] font-medium">{blogList[0].category}</p>
            <h3 className="text-3xl font-bold text-[#391400]">{blogList[0].title}</h3>
            <p className="text-sm text-[#3914007a]">{new Date(blogList[0].date).toDateString()}</p>
          </div>

          <div className="col-span-3 md:col-span-1 space-y-16">
            <div className="space-y-5 md:space-y-2">
              <img src={blogList[1].coverImg} alt="" className="w-full" />
              <p className="text-[#391400] font-medium">{blogList[1].category}</p>
              <h3 className="text-3xl md:text-xl font-bold text-[#391400]">{blogList[1].title}</h3>
              <p className="text-sm text-[#3914007a]">{new Date(blogList[1].date).toDateString()}</p>
            </div>
            <div className="space-y-5 md:space-y-2">
              <img src={blogList[2].coverImg} alt="" className="w-full" />
              <p className="text-[#391400] font-medium">{blogList[2].category}</p>
              <h3 className="text-3xl md:text-xl font-bold text-[#391400]">{blogList[2].title}</h3>
              <p className="text-sm text-[#3914007a]">{new Date(blogList[2].date).toDateString()}</p>
            </div>
          </div>
        </div>

        <hr className="border border-t-[#F3D1BF] my-16 md:my-0 md:mb-16" />

        {/* subscription */}
        <div className="flex flex-col md:flex-row md:items-end gap-10">
          <div className="flex-1">
            <h6 className="text-xl text-[#391400] font-bold">Newsletter</h6>
            <p className="text-[#3914007a]">A digital agency is a business you hire to outsource</p>
          </div>

          <div className="flex-1 flex  gap-5">
            <input type="text" placeholder="Your Email" className="flex-1 px-5 rounded" />
            <button className="filled-btn text-[#391400] bg-white">subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
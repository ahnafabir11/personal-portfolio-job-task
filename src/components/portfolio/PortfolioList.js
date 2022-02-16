import React, { useEffect, useState } from 'react';
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
    tagName: "Motion",
    title: "KeyBoard",
    bgImage: portfolio2,
  },

]

const PortfolioList = () => {
  const [categoryList, setCategoryList] = useState([{ tagName: "See All", count: workList.length }]);
  const [categoryName, setCategoryName] = useState('See All');
  const [filteredList, setFilteredList] = useState(workList);

  // counting category
  useEffect(() => {
    const res = {};
    workList.forEach((obj) => {
      const key = `${obj.tagName}`;
      if (!res[key]) {
        res[key] = { tagName: obj.tagName, count: 0 };
      };
      res[key].count += 1;
    });
    const newWorkList = Object.values(res);

    setCategoryList([...categoryList, ...newWorkList])
  }, [])

  // filter method
  useEffect(() => {
    if (categoryName === "See All") {
      setFilteredList(workList);
    } else {
      const filteredWorkList = workList.filter(work => work.tagName === categoryName);
      setFilteredList(filteredWorkList)
    }
  }, [categoryName])


  return (
    <section className="bg-[#FDF0E9]">
      <div className="container">
        {/* portfolio navigation */}
        <div className="max-w-[45%] mx-auto text-[#391400] text-sm font-medium flex justify-evenly py-10">
          {
            categoryList.map((category, index) =>
              <p
                key={index}
                className="cursor-pointer"
                onClick={() => setCategoryName(category.tagName)}
              >
                {category.tagName} <sup>{category.count}</sup>
              </p>
            )
          }
        </div>

        {/* portfolio lists */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            filteredList.map(work =>
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
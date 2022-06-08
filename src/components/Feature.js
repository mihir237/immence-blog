import React from "react";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <div className="grid grid-cols-2 md:px-[5rem] pt-[5rem] ">
      <div className="">
        <img src="assets/images.jpg" className="w-[100%]" alt="" />
      </div>
      <div className="grid  bg-[black] text-[white] px-[1rem]">
        <h1 className="text-[3rem] text-boldest pb-[1rem]">
          Best Software Development compamy in Education
        </h1>
        <p className="text-[1.5rem]">
          {" "}
          Top Software Development Company in Education for 2022 Providing
          seamless education in a post-COVID world. COVID-19 has the potential
          to radically reshape our education system, but Immence won't let you
          passively sit back and observe what plays out. We are so pleased to
          announce that our team was included in the “The 2022 Best Software
          Development Companies In Education” list published annually by the
          leading consumer education website, OnlineDegree.com.{" "}
        <Link to={`blog?id=0`} className="border-[1px] px-[5px] rounded-lg p-[2px] border-[white] hover:bg-[white] hover:text-[black]">
          {" "}
          Read More...
        </Link>
        </p>
      </div>
    </div>
  );
};

export default Feature;

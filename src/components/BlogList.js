import React from "react";
import { Link } from "react-router-dom";



const BlogList = ({articles}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {articles.map((ele,index) => {
        return (
          <Link 
            to={`blog?id=${index}`} 
            data={ele}
            className="p-[5px] pb-[1rem] border-b-[1px] border-[black]"
            key={index}
          >
            <div className="flex justify-between">
              <div>
              <h1 className="text-[1.3rem] text-boldes pb-[1rem]">{ele.title}</h1>
              <p>
              Immence is a trusted app modernization partner to organizations,
              aiming for improved efficiency and growth. We’re a tech company
              driven by our mission...
            </p>
              </div>
              <img
                src={ele.img}
                className="w-[15rem] p-[5px]"
                alt=""
              />
            </div>
            
          </Link>
        );
      })}
    </div>
  );
};

export default BlogList;

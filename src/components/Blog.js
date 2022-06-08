import React,{useEffect} from "react";
import { useSearchParams } from "react-router-dom";
const Blog = ({ articles }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let q = searchParams.get("id");

  useEffect(() => {
        window.scrollTo(0, 0);
  }, [])
  

  return (
    <>
      <div className="   px-[5rem]   pt-[5rem] pb-[1rem] border-b-[1px] border-black">
        <h1 className="text-[3rem] text-boldest pb-[1rem] underline">
          {articles[q].title}
        </h1>
        <div className="flex">
          <p className=" text-justify text-xl"> {articles[q].text}</p>
          <img
            src={articles[q].img}
            className="px-[1rem]  w-[37%] "
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Blog;

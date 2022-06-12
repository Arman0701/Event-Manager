import React from "react";
import Navbarelem from "./../../components/navbarElements/Navbarelem";
import Blog from "../../components/blogs/Blog";
import Footer from "../../components/Footer/Footer"

const Blogs = () => {
  return (
    <>
    <div>
      <Navbarelem />
      <div className="imgContainer">
        <Blog />
      </div>
    </div>
      <Footer marginTop={"255px"}/>
    </>
  );
};

export default Blogs;

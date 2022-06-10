import React from "react";
import Navbarelem from "./../../components/navbarElements/Navbarelem";
import Blog from "../../components/blogs/Blog";

const Blogs = () => {
  return (
    <div>
      <Navbarelem />
      <div className="imgContainer">
        <Blog />
      </div>
    </div>
  );
};

export default Blogs;

import React from "react";
import Navbar from "../components/Home/Navbar";
import Card from "../components/BlogPost/card";
function BlogPost() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="w-[246px] h-[60px]">
        <p className="font-mulish font-weight font-extrabold text-3xl top-50">
          Blog Post
        </p>
        </div>
        <div className="w-[480px] h-[29px] mt-60">
          Our latest updates and blogs about managing your team
        </div>
        <div class="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1 justify-evenly">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
  );
}

export default BlogPost;

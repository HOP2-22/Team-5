import React from "react";
import Navbar from "../components/Home/navbar2";
import Card from "../components/BlogPost/card";
function BlogPost() {
  return (
    <div>
      <div className="mt-0">
        <Navbar />
      </div>

      <div className="justify-items-center place-items-center h-screen pl-60">
        <div className="w-[246px] h-[60px]">
          <p className="font-mulish font-extrabold text-4xl top-50">
            <span>
              <br className="text-white" />
              <br />
              <br />
              <br />
            </span>
            Blog Post
          </p>
        </div>
        <div className="w-[480px] h-[29px] mt-60 text-gray-500 font-mulish">
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
    </div>
  );
}

export default BlogPost;

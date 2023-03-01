import React from "react";
import Navbar from "../Home/Navbar";
import { useNavigate } from "react-router-dom";
function Body() {
  const navigate = useNavigate();
  return (
    <div className="w-[246px] h-[60px]">
      <Navbar></Navbar>
      Blog posts
    </div>
  );
}

export default Body;

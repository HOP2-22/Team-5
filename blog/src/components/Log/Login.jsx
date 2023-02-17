import React from "react";
import Input from '@mui/joy/Input';
import '@fontsource/public-sans';
import Vector from "../../img/Vex.svg";
import { AiOutlineEye } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
function Body() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row bg-[#F5F5F5]"> 
    <div className="w-1/2 h-screen justify-end items-center hidden md:flex">
     <img src={Vector} alt="" className="w-[800px] h-[800px]"/>
    </div>
    
    <div className="md:w-1/2 h-screen flex items-center justify-center w-full">
    <div className="md:w-[436px] md:h-[542px] flex flex-col gap-5 w-[300px]">
        <div className="font-mulish h-10 text-2xl font-bold">Login</div>
        <div className="font-mulish flex h-7 gap-2">Don't have an account? 
        <div className="text-orange-500 cursor-pointer hover:underline"  
              onClick={() => {
                navigate("/sign");
              }}>
              Create Now
            </div>
         </div>
        <div>
        <div className="h-[85px]">
            <p className="text-sm font-mulish text-[#207198]">Email</p>
            <Input variant="outlined" color="primary" 
             sx={{
               fontStyle : "roboto ",
              }}
              />
        </div>
        <div className="h-[85px]">
            <p className="text-sm font-mulish text-[#207198]">Password</p>
            <Input variant="outlined" color="primary" 
             sx={{
               fontStyle : "roboto ",
              }}
              />
        </div>
        </div>
        <button className="font-mulish md:w-[436px] h-[43px] w-[300px] bg-gradient-to-r from-orange-500 to-orange-800 rounded-lg">Login</button>
        <div className="font-mulish h-8 cursor-pointer hover:underline text-[#207198]">Forgot Password?</div>
    </div>

    </div>
   </div>
  );
}

export default Body;

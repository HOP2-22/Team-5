import React from "react";
import Input from '@mui/joy/Input';
import '@fontsource/public-sans';
import Vector from "../../img/Vex.svg";
import { useNavigate } from "react-router-dom";
function Sign() {
  const navigate = useNavigate();
  return (
   <div className="flex flex-row bg-[#F5F5F5]"> 
    <div className="w-1/2 h-screen justify-end items-center hidden md:flex">
     <img src={Vector} alt="" className="w-[800px] h-[800px]"/>
    </div>
    
    <div className="md:w-1/2 h-screen flex items-center justify-center w-full">
    <div className="md:w-[436px] w-[300px] h-[542px] flex flex-col gap-5">
        <div className="font-mulish h-10 text-2xl font-bold">Create Your Account</div>
        <div className="font-mulish flex h-7 gap-2">Already have an account? <p className="text-orange-500 cursor-pointer hover:underline" 
        onClick={() => {
          navigate("/login");
        }}>Login</p></div>
        <div>
        <div className="h-[85px]">
            <p className="text-sm font-mulish text-[#207198]">Username</p>
            <Input variant="outlined" color="primary" 
             sx={{
               fontStyle : "roboto ",
              }}
              />
        </div>
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
        <div className="h-[85px]">
            <p className="text-sm font-mulish text-[#207198]">Confirm Password</p>
            <Input variant="outlined" color="primary" 
             sx={{
               fontStyle : "roboto ",
              }}
              />
        </div>
        </div>
        <button className="font-mulish md:w-[436px] w-[300px] h-[43px] bg-gradient-to-r from-orange-500 to-orange-800 rounded-lg ">Register</button>
    </div>

    </div>
   </div>
  );
}

export default Sign;

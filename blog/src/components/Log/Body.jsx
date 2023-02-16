import React from "react";

function Body() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-[347px] h-[456px] items-center gap-7">
        <div className="w-[212px] h-[80px] font-mulish text-[64px] font-semibold text-[#224957]">
          Sign in
        </div>
        <div className="font-mulish text-[#224957]">
          Sign in and start managing your candidates!
        </div>
        <div className="w-[300px] h-[45px] bg-[#224957] flex items-center justify-center rounded-lg">
          <input
            type="text"
            name=""
            id=""
            placeholder="Email"
            className="font-mulish h-10 w-[250px] bg-[#224957] outline-none text-white"
          />
        </div>
        <div className="w-[300px] h-[45px] bg-[#224957] flex items-center justify-center rounded-lg">
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="font-mulish h-10 w-[250px] bg-[#224957] outline-none text-white"
          />
        </div>
        <div className="flex flex-row justify-between font-mulish gap-10">
          <div className="flex gap-2">
            <input type="checkbox" name="" id="" />{" "}
            <div className="text-[#224957] cursor-pointer hover:underline">
              Remember me
            </div>
          </div>
          <div className="font-mulish text-[#224957] cursor-pointer hover:underline">
            Forgot password?
          </div>
        </div>
        <button className="w-[300px] h-[45px] bg-[#20DF7F] font-mulish rounded-lg drop-shadow-2xl active:bg-green-600">
          Login
        </button>
        <div className="font-mulish cursor-pointer hover:underline text-green-600">
          Don't have an account?
        </div>
      </div>
    </div>
  );
}

export default Body;

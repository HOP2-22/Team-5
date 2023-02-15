import React from "react";
import back from "../../img/bc.png";
function Body() {
  return (
    <div
      className="flex flex-col w-full h-screen sm:pt-36 sm:pl-24 2xl:pl-56 2xl:pt-96 sm:bg-cover"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="flex flex-col gap-10">
        <div className="w-[514px] h-[120px] text-[45px] text-white font-roboto">
          Instant collaborations for remote teams
        </div>
        <div className="w-[324px] h-[58px] text-[18px] text-white font-roboto">
          All in one for your remote team chats, collaboration and track
          projects
        </div>
        <div className="flex flex-row gap-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="Email"
            className="w-[317px] h-[56px] font-roboto pl-5"
          />
          <button className="w-40 h-14 bg-[#0ebef2] rounded-md text-l text-white font-roboto active:bg-[#6495ED]">
            Get Access
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;

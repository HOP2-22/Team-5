import React from "react";

function Navbar() {
  const header = [
    {
      title: "Products",
    },
    {
      title: "Contact",
    },
    {
      title: "Service",
    },
    {
      title: "Log in",
    },
  ];
  return (
    <div className="w-full h-16 fixed">
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-1 sm:pl-24 2xl:pl-56">
          <div className="text-white text-[48px] font-roboto">team</div>
          <div className="h-2 w-2 bg-[#0ebef2] mt-[24px]"></div>
        </div>
        <div className="flex gap-10 items-center sm:pr-24 2xl:pr-56">
          {header.map((el, index) => {
            return (
              <div
                key={index}
                className="text-white text-l font-roboto underline decoration-[#a09e98] cursor-pointer"
              >
                {el.title}
              </div>
            );
          })}
          <div className="w-[128px] h-[56px] text-l text-[#a09e98] font-roboto flex items-center border-2 border-[#a09e98] mt-1 justify-center rounded cursor-pointer">
            Get Access
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

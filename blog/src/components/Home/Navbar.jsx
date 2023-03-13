import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [offsetY, setOffsetY] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const handler = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
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
      href: "/login",
    },
  ];
  return (
    <div
      className={`${
        offsetY < 100 ? "transparent" : "bg-white"
      } w-full h-50 fixed mt-0`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-1 sm:pl-24 2xl:pl-56">
          <div
            className={`${
              offsetY < 100 ? "text-white" : "text-gray-900"
            } text-white text-[48px] font-mulish font-extrabold`}
          >
            team
          </div>
          <div
            className={`${
              offsetY < 100 ? "transparent" : "bg-black"
            } h-2 w-2 bg-[#0ebef2] mt-[24px]`}
          ></div>
        </div>
        <div className="flex gap-10 items-center sm:pr-24 2xl:pr-56">
          {header.map((el, index) => {
            return (
              <div
                onClick={() => {
                  navigate(el.href);
                }}
                key={index}
                className={`${
                  offsetY < 100 ? "text-white" : "text-black"
                } text-white text-l font-roboto underline decoration-[#a09e98] cursor-pointer`}
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

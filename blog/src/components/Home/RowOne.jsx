import { ThemeContext } from "../../context/ThemeContext";
import React, { useContext } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import meet from "../../img/Meeting.png";
function RowOne() {
  const { theme } = useContext(ThemeContext);
  const styles = {
    text: {
      color: theme === "black" ? "black" : "white",
    },
    backgroundColor: {
      backgroundColor: theme === "black" ? "white" : "black",
    },
  };
  return (
    <div
      style={styles.backgroundColor}
      className="flex w-full justify-between bg-[#F5F5F5]"
    >
      <div className="flex items-center justify-center w-1/2">
        <div className="flex flex-col gap-10">
          <div
            style={styles.text}
            className="w-[398px] h-[120px] text-[48px] font-extrabold font-mulish"
          >
            Your Hub for teamwork
          </div>
          <div style={styles.text} className="w-[465px] h-[145px] text-[18px] ">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <div className="flex flex-row group cursor-pointer">
            <Link className="w-[87px] h-[28px] text-[16px] text-[#4DA0FD] underline">
              Learn more
            </Link>
            <FaLongArrowAltRight className="text-[#4DA0FD]" />
          </div>
        </div>
      </div>
      <div className=" h-screen flex justify-end items-center">
        <img src={meet} alt="" className="sm:h-[705px] 2xl:h-[900px]" />
      </div>
    </div>
  );
}

export default RowOne;

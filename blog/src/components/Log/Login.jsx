import React, { useState, useContext } from "react";
import Input from "@mui/joy/Input";
import "@fontsource/public-sans";
import Vector from "../../img/Vex.svg";
import { useNavigate } from "react-router-dom";
import { ColorModeContext } from "../../context/ThemeContext";
import axios from "axios";
import Cookies from "js-cookie";

function Body() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { setUsername, theme } = useContext(ColorModeContext);

  const LoginFunc = async () => {
    try {
      const res = await axios.post(`http://localhost:8080/user/login`, {
        email: user.email,
        password: user.password,
      });
      if (res.status === 200) {
        Cookies.set("token", res.data.token);
        setUsername(res.data.email);
        navigate(`/`);
      }
    } catch (error) {
      console.log(error);
      alert("Password or Email is invalid");
    }
  };
  return (
    <div
      className={`flex flex-row  ${
        theme === "white" ? "bg-black" : "bg-[]#F5f5f5"
      }`}
    >
      <div className="w-1/2 h-screen justify-end items-center hidden md:flex">
        <img src={Vector} alt="" className="w-[800px] h-[800px]" />
      </div>

      <div className="md:w-1/2 h-screen flex items-center justify-center w-full">
        <div className="md:w-[436px] md:h-[542px] flex flex-col gap-5 w-[300px]">
          <div
            className={`font-mulish h-10 text-2xl font-bold ${
              theme === "white" ? "text-white" : "text-black"
            }`}
          >
            Login
          </div>
          <div
            className={`font-mulish flex h-7 gap-2 ${
              theme === "white" ? "text-white" : "text-black"
            }`}
          >
            Don't have an account?
            <div
              className="text-orange-500 cursor-pointer hover:underline"
              onClick={() => {
                navigate("/sign");
              }}
            >
              Create Now
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              LoginFunc();
            }}
          >
            <div className="h-[85px]">
              <p className="text-sm font-mulish text-[#207198]">Email</p>
              <Input
                placeholder="name@example.com"
                type="email"
                required
                variant="outlined"
                color="primary"
                sx={{
                  fontFamily: "Mulish",
                  color: theme === "white" ? "white" : "black",
                }}
                value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </div>
            <div className="h-[85px]">
              <p className="text-sm font-mulish text-[#207198]">Password</p>
              <Input
                placeholder="••••••••••"
                required
                type="password"
                variant="outlined"
                color="primary"
                sx={{
                  fontFamily: "Mulish",
                  color: theme === "white" ? "white" : "black",
                }}
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>
            <button className="font-mulish md:w-[436px] h-[43px] w-[300px] bg-gradient-to-r from-orange-500 to-orange-800 rounded-lg">
              Login
            </button>
            <div className="font-mulish h-8 cursor-pointer hover:underline text-[#207198]">
              Forgot Password?
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Body;

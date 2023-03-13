import React, { useState } from "react";
import Input from "@mui/joy/Input";
import "@fontsource/public-sans";
import axios from "axios";
import Vector from "../../img/Vex.svg";
import { useNavigate } from "react-router-dom";
function Sign() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [check, setCheck] = useState("");
  const createUser = async () => {
    if (check === userInfo.password) {
      try {
        const res = await axios.post("http://localhost:8080/user/create", {
          user: userInfo.username,
          email: userInfo.email,
          password: userInfo.password,
        });
        console.log(res);
        navigate(`/login`);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error");
      setError(true);
    }
  };
  return (
    <div className="flex flex-row bg-[#F5F5F5]">
      <div className="w-1/2 h-screen justify-end items-center hidden md:flex">
        <img src={Vector} alt="" className="w-[800px] h-[800px]" />
      </div>

      <div className="md:w-1/2 h-screen flex items-center justify-center w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createUser();
          }}
        >
          <div className="md:w-[436px] w-[300px] h-[542px] flex flex-col gap-5">
            <div className="font-mulish h-10 text-2xl font-bold">
              Create Your Account
            </div>
            <div className="font-mulish flex h-7 gap-2">
              Already have an account?{" "}
              <p
                className="text-orange-500 cursor-pointer hover:underline"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </p>
            </div>
            <div>
              <div className="h-[85px]">
                <p className="text-sm font-mulish text-[#207198]">Username</p>
                <Input
                  variant="outlined"
                  color="primary"
                  value={userInfo.username}
                  placeholder="username"
                  type="username"
                  required
                  sx={{
                    fontFamily: "Mulish",
                  }}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, username: e.target.value });
                  }}
                />
              </div>
              <div className="h-[85px]">
                <p className="text-sm font-mulish text-[#207198]">Email</p>
                <Input
                  placeholder="name@mail.domain"
                  variant="outlined"
                  value={userInfo.email}
                  type="email"
                  required
                  color="primary"
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, email: e.target.value });
                  }}
                  sx={{
                    fontFamily: "Mulish",
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
                  value={userInfo.password}
                  onChange={(e) => {
                    setUserInfo({ ...userInfo, password: e.target.value });
                  }}
                  sx={{
                    fontFamily: "Mulish",
                  }}
                />
              </div>
              <div className="h-[85px]">
                <p className="text-sm font-mulish text-[#207198]">
                  Confirm Password
                </p>
                <Input
                  placeholder="••••••••••"
                  required
                  type="password"
                  variant="outlined"
                  value={check}
                  color="primary"
                  sx={{
                    fontFamily: "Mulish",
                  }}
                  onChange={(e) => {
                    setCheck(e.target.value);
                  }}
                />
              </div>
            </div>
            <button className="font-mulish md:w-[436px] w-[300px] h-[43px] bg-gradient-to-r from-orange-500 to-orange-800 rounded-lg ">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sign;

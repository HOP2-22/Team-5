import React from "react";
import image from "../img/Meeting.png";
import { useContext } from "react";
import { ColorModeContext } from "..//context/ThemeContext";

const styles = {
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontWeight: "600",
    width: "50%",
    fontFamily: "Mulish",
  },
  image: {
    visibillity: { md: "none", xl: "none", xs: "none" },
  },
};

export const PageTwo = () => {
  const { theme } = useContext(ColorModeContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
        backgroundColor: theme === "dark" ? "white" : "black",
        // width: "100vw",
      }}
    >
      <div style={styles.text}>
        <p
          style={{
            fontSize: "48px",
            margin: "0",
            fontFamily: "Mulish",
            fontWeight: "800",
            color: theme === "dark" ? "black" : "white",
          }}
        >
          Your Hub for
        </p>
        <p
          style={{
            fontSize: "48px",
            margin: "0",
            fontFamily: "Mulish",
            fontWeight: "800",
            marginBottom: "20px",
            color: theme === "dark" ? "black" : "white",
          }}
        >
          teamwork
        </p>
        <div
          style={{
            fontSize: "18px",
            color: theme === "dark" ? "black" : "white",
          }}
        >
          <p
            style={{
              color: theme === "dark" ? "black" : "white",
              fontFamily: "Mulish",
            }}
          >
            Give everyone you work with—inside and outside your company—a more
          </p>
          <p
            style={{
              color: theme === "dark" ? "black" : "white",
              fontFamily: "Mulish",
            }}
          >
            productive way to stay in sync. Respond faster with emoji, keep
          </p>
          <p
            style={{
              color: theme === "dark" ? "black" : "white",
              fontFamily: "Mulish",
            }}
          >
            conversations focused in channels, and simplify all your
            communication
          </p>
          <p
            style={{
              color: theme === "dark" ? "black" : "white",
              fontFamily: "Mulish",
            }}
          >
            into one place.
          </p>
          <a href="/">Learn more..</a>
        </div>
      </div>
      <img
        src={image}
        alt="meeting"
        className="hidden md:block"
        width={500}
        height={700}
      />
    </div>
  );
};

export default PageTwo;

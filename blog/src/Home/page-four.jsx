import React from "react";
import image from "../img/guy.png";
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
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Mulish",
  },
  h1: {
    fontSize: "48px",
    margin: "0",
    fontWeight: "800",
    marginBottom: "10px",
    fontFamily: "Mulish",
  },
};

export const PageFour = () => {
  const { theme } = useContext(ColorModeContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        backgroundColor: theme === "dark" ? "white" : "black",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "600",
          width: "50%",
          color: theme === "dark" ? "black" : "white",
        }}
      >
        <p
          style={{
            fontSize: "48px",
            margin: "0",
            fontWeight: "800",
            marginBottom: "10px",
            color: theme === "dark" ? "black" : "white",
            fontFamily: "Mulish",
          }}
        >
          Scheduling that
        </p>
        <p
          style={{
            fontSize: "48px",
            margin: "0",
            fontWeight: "800",
            marginBottom: "10px",
            color: theme === "dark" ? "black" : "white",
            fontFamily: "Mulish",
          }}
        >
          actually works
        </p>
        <div
          style={{
            fontSize: "18px",
            color: theme === "dark" ? "black" : "white",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              color: theme === "dark" ? "black" : "white",
              fontFamily: "Mulish",
            }}
          >
            Give everyone you work with—inside and outside your company—a more
          </p>
          <p
            style={{
              fontSize: "18px",
              color: theme === "dark" ? "black" : "white",
              fontFamily: "Mulish",
            }}
          >
            productive way to stay in sync. Respond faster with emoji, keep
          </p>
          <p
            style={{
              fontSize: "18px",
              color: theme === "dark" ? "black" : "white",
              fontFamily: "Mulish",
            }}
          >
            conversations focused in channels, and simplify all your
            communication
          </p>
          <p
            style={{
              fontSize: "18px",
              color: theme === "dark" ? "black" : "white",
              fontFamily: "Mulish",
            }}
          >
            into one place.
          </p>
          <a href="#">Learn more..</a>
        </div>
      </div>
      <div style={styles.image}>
        <img src={image} alt="brook" className="hidden md:block" />
      </div>
    </div>
  );
};

export default PageFour;

import React from "react";
import image from "../img/ads.png";
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
  },
};

export const PageThree = () => {
  const { theme } = useContext(ColorModeContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
        backgroundColor: theme === "dark" ? "white" : "black",
      }}
    >
      <div style={styles.image}>
        <img src={image} alt="brook" className="hidden md:block" />
      </div>
      <div style={styles.text}>
        <p
          style={{
            fontSize: "48px",
            margin: "0",
            fontWeight: "800",
            width: "50%",
            fontFamily: "Mulish",
            color: theme === "dark" ? "black" : "white",
          }}
        >
          Simple Task
        </p>
        <p
          style={{
            fontSize: "48px",
            margin: "0",
            fontWeight: "800",
            marginBottom: "20px",
            fontFamily: "Mulish",
            color: theme === "dark" ? "black" : "white",
          }}
        >
          management
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
              fontFamily: "Mulish",
              color: theme === "dark" ? "black" : "white",
            }}
          >
            productive way to stay in sync. Respond faster with emoji, keep
          </p>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "Mulish",
              color: theme === "dark" ? "black" : "white",
            }}
          >
            conversations focused in channels, and simplify all your
            communication
          </p>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "Mulish",
              color: theme === "dark" ? "black" : "white",
            }}
          >
            into one place.
          </p>
          <a href="#">Learn more..</a>
        </div>
      </div>
    </div>
  );
};

export default PageThree;

import React from "react";
import image from "../img/Meeting.png";
import { useContext } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ColorModeContext } from "..//context/ThemeContext";

const styles = {
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontWeight: "600",
    width: {
      xl: "50%",
      lg: "40%",
    },
    fontFamily: "Mulish",
  },
  image: {
    visibillity: { md: "none", xl: "none", xs: "none" },
  },
};

export const PageTwo = () => {
  const { theme } = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: { xl: "none", lg: "none", md: "center", xs: "center" },
        height: "100vh",
        width: "100vw",
        backgroundColor: theme === "dark" ? "white" : "black",
        // width: "100vw",
      }}
    >
      <Box sx={styles.text}>
        <Typography
          sx={{
            fontSize: "48px",
            margin: "0",
            fontFamily: "Mulish",
            fontWeight: "800",
            color: theme === "dark" ? "black" : "white",
          }}
        >
          Your Hub for
        </Typography>
        <Typography
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
        </Typography>
        <Box
          sx={{
            fontSize: "18px",
            color: theme === "dark" ? "black" : "white",
          }}
        >
          <Typography
            sx={{
              color: theme === "dark" ? "black" : "white",
              fontFamily: "Mulish",
            }}
          >
            Give everyone you work with—inside and outside your company—a more
          </Typography>
          <Typography
            sx={{
              color: theme === "dark" ? "black" : "white",
              fontFamily: "Mulish",
            }}
          >
            productive way to stay in sync. Respond faster with emoji, keep
          </Typography>
          <Typography
            sx={{
              color: theme === "dark" ? "black" : "white",
              fontFamily: "Mulish",
            }}
          >
            conversations focused in channels, and simplify all your
            communication
          </Typography>
          <Typography
            sx={{
              color: theme === "dark" ? "black" : "white",
              fontFamily: "Mulish",
            }}
          >
            into one place.
          </Typography>
          <a href="/">Learn more..</a>
        </Box>
      </Box>
      <img src={image} alt="meeting" className="hidden lg:block" />
    </Box>
  );
};

export default PageTwo;

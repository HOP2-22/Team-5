import React from "react";
import image from "../img/ads.png";
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
};

export const PageThree = () => {
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
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Mulish",
        }}
      >
        <img src={image} alt="brook" />
      </Box>
      <Box sx={styles.text}>
        <Typography
          sx={{
            fontSize: "48px",
            margin: "0",
            fontWeight: "800",
            fontFamily: "Mulish",
            color: theme === "dark" ? "black" : "white",
          }}
        >
          Simple Task
        </Typography>
        <Typography
          sx={{
            fontSize: "48px",
            margin: "0",
            fontWeight: "800",
            marginBottom: "20px",
            fontFamily: "Mulish",
            color: theme === "dark" ? "black" : "white",
          }}
        >
          management
        </Typography>
        <Box
          sx={{
            fontSize: "18px",
            color: theme === "dark" ? "black" : "white",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              color: theme === "dark" ? "black" : "white",
              fontFamily: "Mulish",
            }}
          >
            Give everyone you work with—inside and outside your company—a more
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Mulish",
              color: theme === "dark" ? "black" : "white",
            }}
          >
            productive way to stay in sync. Respond faster with emoji, keep
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Mulish",
              color: theme === "dark" ? "black" : "white",
            }}
          >
            conversations focused in channels, and simplify all your
            communication
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Mulish",
              color: theme === "dark" ? "black" : "white",
            }}
          >
            into one place.
          </Typography>
          <a href="#">Learn more..</a>
        </Box>
      </Box>
    </Box>
  );
};

export default PageThree;

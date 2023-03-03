import React from "react";
import image from "../img/bc.png";
import { Box } from "@mui/system";

const styles = {
  BigWord: {
    fontSize: "48px",
    fontFamily: "Mulish",
    fontWeight: "700",
    marginBottom: "30px",
    color: "white",
  },
  middle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    alignItems: "center",
    width: "30vw",
    marginLeft: "200px",
    marginTop: "300px",
  },
  word: {
    fontWeight: "700",
    fontSize: "18px ",
    color: "white",
    marginBottom: "40px",
    fontFamily: "Mulish",
  },
  input: {
    width: "19vw",
    height: "5vh",
    marginRight: "10px",
    fontWeight: "600",
    fontSize: "16px ",
    border: "none",
    fontFamily: "Mulish",
    borderRadius: "5px",
  },
  Button: {
    height: "5.2vh",
    width: "10vw",
    color: "white",
    fontWeight: "700",
    fontSize: "16px ",
    fontFamily: "Mulish",
    backgroundColor: "deepskyblue",
    border: "none",
    borderRadius: "5px",
  },
};

export const PageOne = () => {
  return (
    <Box>
      <Box
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Box style={styles.middle}>
          <Box style={styles.BigWord}>
            Instant collaborations for remote teams
          </Box>
          <Box style={styles.word}>
            All in one for your remote team chats, collaboration and track
            projects
          </Box>
          <Box style={styles.inputDiv}>
            <input placeholder="Email" style={styles.input} />
            <button style={styles.Button}>Get Early Access</button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PageOne;

import React from "react";
import { useState, useContext } from "react";
import { ColorModeContext } from "../context/ThemeContext";
import Card from "../components/BlogPost/card";
import { Container, Grid, Box } from "@mui/material";

import axios from "axios"
function BlogPost() {
    const [data1, setData1] = useState("");
      const giphy = axios.create({
        baseURL: `http://localhost:8080`,
      });
      const {theme} = useContext(ColorModeContext);
  
    const getData = () => {
      const getPosts = async () => {
        try {
          const res = await giphy.get("/post/");
          setData1(res.data.data);
          console.log(data1);
        } catch (error) {
          console.log(error.message);
        }
      };
      getPosts();
    };
    getData()
  return (
    <Box sx={{width: "100vw", backgroundColor: theme === "white" ? "black" : "white"}}>

    <Container sx={{ maxWidth: {
      lg: 1600
    }}}>
      
      <Grid container spacing={1}>
        {
          new Array(9).fill(null).map((_, index)=> {
            return (
              <Grid key={index} item xs={12} md={6} lg={4}>
                <Card
                  sx={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: theme === "white" ? "black" : "white",
                  }}
                />
              </Grid>
            );
          })
        }
      </Grid>
    </Container>
        </Box>
  );
}

export default BlogPost;

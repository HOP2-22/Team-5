import { useState } from "react";
// import { useStorage } from "../hooks";
// import { useInput } from "../hooks/useInput";
import axios from "axios";
import { Box, Container, Typography, Button, Input } from "@mui/material";

const PostCreate = () => {
  // const [blogTitle, blogTitleBind] = useState("");
  // const [text, textBind] = useState("");
  // const create = async () => {
  //   if (!blogTitle || !text) return;
  //   try {
  //     const res = await axios.post("http://localhost:8080/post/create", {
  //       blogTitle: title,
  //       text: text,
  //     });
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container
      maxWidth="xl"
      sx={{
        pt: 14,
        pb: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Box>
        {/* <Typography variant="h5" {...titleBind}> */}
        <Typography variant="h5">Title for your post</Typography>
        <Input placeholder="title" />
        {/* <Typography variant="h5" {...textBind}> */}
        <Typography variant="h5">Text for your post</Typography>
        <Input placeholder="text" />
      </Box>
      {/* <Typography variant="h5">Upload a picture for your post</Typography> */}
      {/* <Box display={"flex"} alignItems={"center"}>
        <Input type={"file"} onChange={(e) => setFile(e.target.files[0])} />
        <Button onClick={() => handle()}>Upload</Button>
        <img src={imageURL} width="100px" height="100px" alt="" />
      </Box> */}
      <Button
        sx={{
          width: "",
          background: "#DFE2E8",
          color: "#6D7D8B",
          padding: "10px 50px",
        }}
        // onClick={() => create()}
      >
        Post
      </Button>
    </Container>
  );
};
export default PostCreate;

import { useState } from "react";
import axios from "axios";
import { Box, Container, Typography, Input } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";
import { useInput, useStorage } from "../../hooks";

const PostCreate = () => {
  const [title, titleBind] = useInput("");
  const [text, textBind] = useInput("");
  const [file, setFile] = useState(null);
  const { handleUpload, loading, setLoading } = useStorage();
  const [imageURL, setImageURL] = useState(null);
  const handle = async () => {
    const res = await handleUpload(file);
    setImageURL(res);
  };
  const create = async () => {
    if (!title || !text || !imageURL) return;
    try {
      const res = await axios.post("http://localhost:8080/post/create", {
        blogTitle: title,
        text: text,
        picture: imageURL,
      });
      console.log(res);
      console.log(imageURL);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        pt: 14,
        pb: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 7,
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ fontFamily: "Mulish", fontWeight: 800 }}>
          Title for your post
        </Typography>
        <Textarea
          color="primary"
          minRows={2}
          placeholder="Title..."
          size="md"
          variant="plain"
          sx={{ fontFamily: "Mulish" }}
          {...titleBind}
        />
        <Typography variant="h4" sx={{ fontFamily: "Mulish", fontWeight: 800 }}>
          Text for your post
        </Typography>
        <Textarea
          color="primary"
          minRows={2}
          placeholder="Text..."
          size="md"
          variant="plain"
          sx={{ fontFamily: "Mulish" }}
          {...textBind}
        />
      </Box>
      {/* <Button sx={{ fontFamily: "Mulish" }} startDecorator={<Add />} onClick={() => handle()}>
        Upload
      </Button> */}
      <Box display={"flex"} alignItems={"center"}>
        <Input type={"file"} onChange={(e) => setFile(e.target.files[0])} />
        <Button onClick={() => handle()}>Upload</Button>
        <img src={imageURL} width="100px" height="100px" alt="" />
      </Box>
      <Button
        variant="solid"
        sx={{
          width: "60px",
          background: "#DFE2E8",
          color: "#6D7D8B",
          padding: "10px 50px",
          fontFamily: "Mulish",
        }}
        onClick={() => create()}
      >
        Post
      </Button>
    </Container>
  );
};
export default PostCreate;

import { useState } from "react";
import axios from "axios";
import { Box, Container, Typography } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";

const PostCreate = () => {
  const [data, setData] = useState({
    blogTitle: "",
    text: "",
  });
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
        />
      </Box>
      <Button sx={{ fontFamily: "Mulish" }} startDecorator={<Add />}>
        Upload
      </Button>
      <Button
        variant="solid"
        sx={{
          width: "60px",
          background: "#DFE2E8",
          color: "#6D7D8B",
          padding: "10px 50px",
          fontFamily: "Mulish",
        }}
      >
        Post
      </Button>
    </Container>
  );
};
export default PostCreate;

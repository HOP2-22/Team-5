import Container from "@mui/material/Container";
import { Box, Typography, Avatar } from "@mui/material";
import pfp from "../img/pfp.png";
import post from "../img/post.png";
import Stack from "@mui/material/Stack";
import compfp from "../img/compfp.png";
import SendIcon from "@mui/icons-material/Send";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";
import { borderRadius } from "@mui/system";

function PostPage() {
  return (
    <Container sx={{ width: "100%" }}>
      <Box>
        <Container maxWidth="md" sx={{ display: "grid", gap: 5 }}>
          <Box marginTop={30}>
            <Typography
              sx={{
                fontFamily: "Mukta",
                fontSize: "48px",
                lineHeight: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "background: #25313C",
              }}
            >
              10 Secrets for managing a remote team
            </Typography>
          </Box>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ color: "#6D7D8B", fontFamily: "Mulish", fontSize: "14px" }}
          >
            <Avatar
              alt=""
              src={pfp}
              sx={{
                width: "56px",
                height: "56px",
              }}
            />
            <Typography>Shedrack eze</Typography>
            <Typography>|</Typography>
            <Typography>2nd January, 2022</Typography>
          </Stack>
        </Container>
        <Box mb={5} mt={5}>
          <img sx={{ width: "100%" }} src={post} />
        </Box>
        <Container maxWidth="md" sx={{ display: "grid", gap: 5 }}>
          <Typography sx={{ fontFamily: "   Mulish", fontSize: "18px" }}>
            If you’re thinking of starting a blog of your own, but just don’t
            have a clue on what to blog about, then fear not! In this article, I
            have included a whole load of blog examples from a wide variety of
            different niches, all run on different blogging platforms like
            WordPress, Joomla! and Drupal. Since the beginning of the internet,
            millions and millions and millions of blogs have been created. Many
            have died due to lost interest or their owners giving up on the
            idea, while others have thrived and continue to grow, making money
            and earning their owners a steady income. It’s a constant evolution
            of content that keeps people coming back for more, especially if
            these blogs contact highly resourceful material that people find
            useful and interesting. Each example listed in this blog post are
            all different in some way and all bring something unique to their
            readers & subscribers. I want to show you what is possible and how
            you can take inspiration from them and create an awesome blog of
            your own. Some of these blogs make over $100k a month, others are
            just a hobby for their owners, but all have the same purpose at
            their core… the love of writing and sharing information. Some of
            these blogs make over $100k a month, others are just a hobby for
            their owners, but all have the same purpose at their core… the love
            of writing and Some of these blogs make over $100k a month, others
            are just a hobby for their owners, but all have the same purpose at
            their core… the love of writing and sharing information. Some of
            these blogs make over $100k a month, others are just a hobby for
            their owners, but all have the same purpose at their core… the love
            of writing and sharing information.
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Avatar
              alt=""
              src={pfp}
              sx={{
                width: "56px",
                height: "56px",
              }}
            />
            <Stack spacing={0}>
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  fontSize: "14px",
                }}
              >
                Written by
              </Typography>
              <Typography sx={{ fontFamily: "Mulish", fontSize: "24px" }}>
                Shedrack eze
              </Typography>
              <Typography
                sx={{
                  color: "#989898",
                  fontFamily: "Mulish",
                  fontSize: "14px",
                }}
              >
                CEO TEAM App
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              backgroundColor: "#6D7D8B38",
              width: "100%",
              height: "1px",
              borderRadius: "10px",
            }}
          ></Box>
          <Typography
            sx={{
              color: "#989898",
              fontFamily: "Mulish",
              fontSize: "24px",
            }}
          >
            Join the conversation
          </Typography>
          <Stack direction="row" spacing={4} mb={10}>
            <Avatar
              sx={{
                width: "56px",
                height: "56px",
              }}
              src={compfp}
            />
            <Textarea
              color="neutral"
              disabled={false}
              minRows={2}
              placeholder="Comment"
              size="lg"
              variant="plain"
              sx={{ width: "70%", fontFamily: "Mulish" }}
            />
            <Button
              onClick={function () {}}
              type="submit"
              variant="solid"
              sx={{
                fontFamily: "Mulish",
                backgroundColor: "#65D8EF",
                width: "15%",
              }}
            >
              Submit
            </Button>
          </Stack>
        </Container>
      </Box>
    </Container>
  );
}
export default PostPage;

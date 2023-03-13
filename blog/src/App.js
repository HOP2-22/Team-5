import ThemeContext from "./context/ThemeContext";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/Sign";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PostPage from "./pages/PostPage";
import BlogPost from "./pages/BlogPost";
import { Box } from "@mui/system";

function App() {
  return (
    <ThemeContext>
      <BrowserRouter>
        <Box>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign" element={<SignUp />} />
            <Route path="/blogpost" element={<PostPage />} />
            <Route path="/blog" element={<BlogPost />} />
          </Routes>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeContext>
  );
}

export default App;

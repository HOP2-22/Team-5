import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/Sign";
import BlogPost from "./pages/BlogPost";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<SignUp />}/>
        <Route path="/blog" element={<BlogPost />} />
        <Footer/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;

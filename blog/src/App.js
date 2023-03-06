import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/Sign";

import Footer from "./components/layout/Footer";
import  PostPage  from "./pages/PostPage";
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<SignUp />}/>
        {/* <Route path="/blog" element={<BlogPost />} /> */}
        <Route path="/page" element={<PostPage/>} />
      </Routes>
        <Footer/>

    </div>
    </BrowserRouter>
  );
}

export default App;

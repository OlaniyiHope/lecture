import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  createBrowserRouter,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginPage from "./pages/LoginPage";
import Blog from "./pages/Blog";
import Sidebar from "./Sidebar";
import BlogDet from "./pages/BlogDet";
import Banner from "./pages/Banner";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/banner" element={<Banner />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/register" element={<LoginPage />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/sidebar" element={<Sidebar />} />
          <Route exact path="/singleblog/:id" element={<BlogDet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

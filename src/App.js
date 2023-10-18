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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/register" element={<LoginPage />} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

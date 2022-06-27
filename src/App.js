import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Links from "./components/home/Links";
import Navbar from "./components/home/Navbar"
import Home from "./components/home/Home"
import Resume from "./components/resume/Resume"
import Footer from "./components/home/Footer";


export default function App() {
  return (
    <div className="App">
      <Router>
            <Navbar/>
            <div className="nav-gap"></div>

            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/resume" exact element={<Resume/>} />
                <Route path="/links" exact element={<Links/>} />
                {/* <Route path="/gallery" exact element={<Gallery/>} />
                <Route path="/blog/:id" exact element={<Blog />} />
                <Route path="/terms" exact element={<Terms/>} />
                <Route path="/privacy" exact element={<Privacy/>} /> */}
            </Routes>

            <Footer/>
      </Router>
    </div>
  )
}

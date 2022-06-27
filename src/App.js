import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Links from "./components/home/Links";
import Appbar from "./components/home/Appbar"
import Home from "./components/home/Home"
import Resume from "./components/resume/Resume"
import Footer from "./components/home/Footer";


export default function App() {
  return (
    <div className="App w-100">
      <Router>
            <Appbar/>
            <Routes>
                <Route path="/salaman128/" exact element={<Home/>} />
                <Route path="/salaman128/resume" exact element={<Resume/>} />
                <Route path="/salaman128/links" exact element={<Links/>} />
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

import React from 'react';
import Header from "./Header";
import About from "./About";

export default function Home() {
    window.scrollTo(0, 0);
    return (
    <div>
    <Header/>
    <About/>
    </div>
    )
}
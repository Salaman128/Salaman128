import React from 'react';
import Header from "./Header";
import About from "./About";

export default function Home() {
    return (
        <div className="home">
            <Header/>
            <About/>
        </div>
    )
}
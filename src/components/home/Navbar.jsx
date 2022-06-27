import React from 'react';


const Navbar = (props) => {
    return (
        <div className="navbar fixed-top nav">
          <a className="navbar-brand navi" href="/">Nandha Kumar</a>
          <div className="d-flex">
            <a className="navi" href="/">Intro</a>
            {/* <Link className="navi" href="/blog">Blog</Link> */}
            <a className="navi" href="/resume">Resume</a>
          </div>
        </div>
    )
}

export default Navbar;

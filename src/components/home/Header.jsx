import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
            {/* <h1 className="my-name">Nandha Kumar</h1> */}
            <Typed 
                className="typed-text"
                strings={[
                    "App Dev",
                    "AI",
                    "Books",
                    "Hacking",
                    "Data Analytics",
                    "Data Science",
                    "Electrical",
                    "Electronics",
                    "Film Making",
                    "Movies",
                    "Web Dev",
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            </div>
        </div>
    )
}

export default Header;

/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import RedditIcon from '@mui/icons-material/Reddit';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TheatersIcon from '@mui/icons-material/Theaters';
import Tooltip from '@mui/material/Tooltip';


function Footer() {
    const smlinks = [
        {
            name: "WhatsApp",
            url: "https://api.whatsapp.com/send/?phone=918778927733",
            icon: <WhatsAppIcon />,
            color: "#43d854"
        },
        {
            name: "Telegram",
            url: "https://t.me/NandhadeSparrow",
            icon: <TelegramIcon />,
            color: '#00405d'
        },
        {
            name: "Twitter",
            url: "https://twitter.com/nandhadesparrow",
            icon: <TwitterIcon />,
            color: '#55acee'
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nandhadesparrow",
            icon: <LinkedInIcon />,
            color: '#0077b5'
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/nandhadesparrow/",
            icon: <InstagramIcon />,
            color: '#3f729b'
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/nandhadesparrow2k",
            icon: <FacebookIcon />,
            color: '#3b5998'
        },
        {
            name: "Youtube Music",
          url: "https://music.youtube.com/channel/UCtX1CV4KqAWJGzshRmo8h3Q",
          icon: <YouTubeIcon />,
          color: '#cd201f'
        },
        {
            name: "Github",
            url: "https://github.com/nandhadesparrow",
            icon: <GitHubIcon />,
            color: '#00405d'
        },
        {
            name: "Letterboxd",
            url: "https://letterboxd.com/nandha",
            icon: <TheatersIcon />,
            color: '#00405d'
        },
        // {
            // name: "Whatsapp",
            //   url: "",
            //   icon: <RedditIcon />,
            //   color: '#ff4500'
            // },
      ];
    return (
        <div class="footer py-5 text-center">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <p>
                        <a href="https://goo.gl/maps/CKUX75831m6SpECt9" target="_blank" rel="noreferrer">
                            <LocationOnIcon className="icon"/>
                            Pandalgudi, Earth
                            <br/>
                            <br/>
                        </a>
                    </p>
                </div>
                <div className="col-lg-6 col-md-12">
                    <a href="mailto:nandhaoffl@gmail.com" target="_blank" rel="noreferrer">
                    <EmailIcon className="icon"/>
                    nandhaoffl@gmail.com</a><br/>
                    <a href="tel:8778927733" target="_blank" rel="noreferrer">
                    <CallIcon className="icon"/>
                    91 87789 27733</a>
                </div>
            </div>
            <div className="mt-5">
                <div className="links">
                    {smlinks.map((link)=>(
                        <a 
                        style={{color: "white", textDecoration: 'none'}}
                        className="mx-2 fa icon" rel='noreferrer' target="_blank"
                        href={link.url}
                        >
                            <Tooltip title={link.name} placement="top">
                                {link.icon}
                            </Tooltip>
                        </a>
                    ))
                    }
                    {/* Feel free to message me anytime.
                    <br/> */}
                    {/* Who hates Telegram?
                    <br/> */}
                    {/* Wanna c my playlists?
                    <br/> */}
                    {/* For shitpost and memes.
                    <br/> */}
                    {/* Will post a pic for a lifetime. Follow if u wanna c some random pics. 
                    <br/> */}
                    {/* Feel free to connect.
                    <br/> */}
                    {/* If you wanna get my random small side projects.
                    <br/> */}
                </div>
                {/* <div class="terms">
                <Link className="term" to="/web/terms">Terms of Service</Link>& &nbsp;
                <Link className="privacy" to="/web/privacy">Privacy Policy</Link>
                </div>
                <hr/>
                <div class="f c"><strong class="fi"> &copy; {new Date().getFullYear()} Nandha Kumar</strong></div> */}
                <br/>
                <br/>    
                ©2022 Nandha Kumar Seenivasan
            </div>
        </div>
    )
}

export default Footer;
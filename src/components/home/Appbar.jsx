import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import logo from "./read.jpeg"
import { Modal, Slide } from '@mui/material';


const pages = [
    {
        name: "About",
        to: "/salaman128/#about"
    },
//   {
//     name: "Gallery",
//     to: "/#gallery"
//   },
  {
    name: "Resume",
    to: "/salaman128/resume#resume"
  }, 
//   {
//     name: "Posts",
//     to: "/#posts"
//   },
  {
    name: "Contact",
    to: "#contact"
  },
];


export default function Appbar(){
    const navigate = useNavigate();

    const [navMenuOpen, setNavMenuOpen] = React.useState(false);
    const navClick = () => {
        setNavMenuOpen(!navMenuOpen);
    };
    const handleClose = (event, reason) => {
        if (reason === "backdropClick"){
        setNavMenuOpen(false)
        }
    };

    return (
        <AppBar sx={{backgroundColor: "#dfd", backdropFilter: "blur(10px)", height: "76px"}} 
        className="appbar w-100 fixed-top">
        <Container sx={{marginY: "auto",}} maxWidth="xl">
            <Toolbar disableGutters>
            {/* <Avatar 
            onClick={()=>{navigate("/")}}
            sx={{ width: 80, height: 80, display: { xs: 'none', md: 'flex' } }} 
            variant="square" src={logo} /> */}
            <Typography sx={{marginLeft:"20px", width: "50%", color: 'black', display: { xs: 'none', md: 'flex' }}}>
            Salamanraj
            </Typography>

            <Box sx={{  display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={()=>{setNavMenuOpen(1)}}
                >
                <MenuIcon />
                </IconButton>
                <Modal open={navMenuOpen} onClose={handleClose}>
                    <Slide direction="right" in={navMenuOpen} mountOnEnter unmountOnExit>
                        <AppBar position="fixed" sx={{backgroundColor: "#dfd", left:0, width:"max-content", padding:2, paddingTop:5, height: '100%' }}>
                            {pages.map((page) => (
                                <a className={"my-3 btn btn-light"} 
                                href={page.to} onClick={()=>{navClick()}}>
                                    <Typography className={""}>{page.name}</Typography>
                                </a>
                            ))}
                        </AppBar>
                    </Slide>
                </Modal>
            </Box>

            <Box sx={{marginLeft: "auto", width: "auto", color: 'black', display: { xs: 'flex', md: 'none' }}}>
                <Typography >
                Salamanraj
                </Typography>
            </Box>

            <Box sx={{ marginLeft: "auto", width: "auto", display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <a
                    className="no-link mx-3"
                    key={page.to}
                    href={page.to}
                    >
                    {page.name}

                    </a>
                ))}
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    );
};

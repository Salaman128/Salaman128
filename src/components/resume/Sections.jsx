import React from 'react';
import Card from "./Card";
import { Grid } from '@mui/material';
import vskb from "./vskb.png";
import sscbc from "./sscbc.png";


const Section = ({size, title}) => {
    return (
        <div style={{width: '100%'}} className="">
            <p style={{
                width:"100%", textAlign: "center", fontSize: size+"px", margin: "40px 0", fontWeight: "bold"
            }}>
            {title}
            </p>
        
        </div>           
    )
}


const ImgBoxSlide = ({list}) => {
    return (
        <Grid sx={{padding: "20px"}} container justifyContent="center" spacing={3}>
            {list.map((item, i)=>{
                return(
                    <Grid key={i} item xs={12} sm={6} md={4} lg={4}>
                        <Card 
                            bg={item.bg}
                            img={item.img} 
                            title={item.title} 
                            text={item.text}
                            buttons={item.buttons}
                        />
                    </Grid>
                )
            })}
        </Grid>      
    )
}


export default function Sections() {


    return (
        <div className="w-100">
            <div className="work" style={{backgroundColor: "#ddd", padding: "20px 10px"}}>
                <Section size={40} title={"Work Experience"}/>
                <div className="m-5 row d-flex justify-content-center">
                    <div className="col-md-4">
                        <strong>Web Developer & Digital Marketer</strong>
                        <p>(Part Time)</p> 
                    </div>
                    <div className="col-md-4">
                        <i>January 2021 - now</i>
                    </div>
                </div>
                <div className="m-5 row d-flex justify-content-center">
                    <div className="col-md-4">
                        <strong>Assistant Electrician & Plumber</strong>
                        <p>(Part Time)</p> 
                    </div>
                    <div className="col-md-4">
                        <i>July 2021 - October 2021</i>
                    </div>
                </div>
            </div>
            <div className="acadproject" style={{backgroundColor: "#ddd", padding: "20px 10px"}}>
                <Section size={30} title={"Academic Project"}/>
                <ImgBoxSlide 
                    list={[
                        {
                            img: sscbc,
                            bg: "#555",
                            title: "SSC: Version 2",
                            text: "Made a Progressive Web App with MERN stack for content sharing and communication and optimizing it for SEO. Set a device up in classrooms for face recognition, announcements and IoT controls. The device can be controlled with the app and also the IoT data can be seen in app. Certificates are added on blockchain.",
                            buttons: [
                                {
                                    name: "View Web App",
                                    link: "https://main.d3uvyyoi71ssrp.amplifyapp.com"
                                },
                                {
                                    name: "Paper in IJRPR Journal",
                                    link: "https://www.ijrpr.com/uploads/V3ISSUE6/IJRPR5047.pdf"
                                },
                            ]
                        }
                    ]}
                />  
            </div>
            <div className="" style={{padding: "20px 10px"}}>
                <Section size={40} title={"Academic Education"}/>
                <div className="m-5 row d-flex justify-content-center">
                    <div className="col-md-4">
                        <strong>Bachelor Degree, Electronics and Communication Engineering</strong>
                        </div>
                    <div className="col-md-4">
                        <strong>Sree Sowdambika College of Engineering, Aruppukottai</strong>
                        <br/>
                        <i>June 2018 - May 2022</i>
                        <br/>
                        <p>
                        </p>
                    </div>
                </div>  
                <div className="m-5 row d-flex justify-content-center">
                    <div className="col-md-4">
                        <strong>Higher Secondary School</strong>
                    </div>
                    <div className="col-md-4">
                        <strong>Govt Higher Secondary School, Kariapatti</strong>
                        <br/>
                        <i>2018</i>
                        <br/>
                        <p></p>
                    </div>
                </div> 
            </div>
        </div>
    )
}
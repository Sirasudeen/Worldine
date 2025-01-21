import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Box, Typography } from '@mui/material';
import TextPressure from "./../Animations/TextAnimations/TextPressure/TextPressure.jsx"
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import DecayCard from './../Animations/Components/DecayCard/DecayCard.jsx';
import Country from './Country.jsx';
import { useWindowScroll } from "@reactuses/core";

gsap.registerPlugin(ScrollTrigger);


const Home = () => {

    const char = "Scroll down to explore".split("")


    return (
        <>
            <Box>
                <Box className="Section-1"
                    sx={{
                        display: "flex",
                        minHeight: "100vh",
                        width: "100%",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Box sx={{
                        padding: "5% 10% 10% 10%"
                    }}>

                        <TextPressure
                            text="WORLDINE"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={true}
                            italic={true}
                            textColor="black"
                            strokeColor="#ff0000"
                            minFontSize={30}
                        />
                        <Typography
                            sx={{
                                padding: "0% 5% 5% 2%",
                                fontSize: "clamp(0.3rem,0.3rem + 1vw,2rem)",
                                fontFamily: "Poppins"
                            }}
                        >

                            EXPLORE THE WORLD ONLINE
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",

                        padding: "2%",
                    }}>
                        <Typography
                            sx={{
                                fontWeight: "400",
                                fontFamily: "Poppins",

                            }}
                        >
                            {
                                char.map((char, i) => (
                                    <span key={i} className='letter'>
                                        {char}
                                    </span>
                                ))
                            }
                        </Typography>
                    </Box>
                </Box>
                <Box className="Section-2"
                    sx={{
                        display: "flex",
                        minHeight: "100vh",
                        width: "100%",
                    }}
                >
                    <Country Link="new-zealand.png" Name="NEW ZEALAND" />
                </Box>
                <Box className="Section-3"
                    sx={{
                        display: "flex",
                        minHeight: "100vh",
                        width: "100%",
                    }}
                >
                    <Country Link="new-zealand.png" Name="JAPAN" />
                </Box>
                <Box className="Section-3"
                    sx={{
                        display: "flex",
                        minHeight: "100vh",
                        width: "100%",
                    }}
                >
                    <Country Link="new-zealand.png" Name="INDIA" />
                </Box>
            </Box>
        </>
    )
}

export default Home;
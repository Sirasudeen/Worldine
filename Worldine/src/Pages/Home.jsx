import React, { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { Box, Typography } from '@mui/material';
import TextPressure from "../Animations/TextAnimations/TextPressure/TextPressure.jsx"
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

import Country from '../components/Country.jsx';
import { useWindowScroll } from "@reactuses/core";
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger);


const Home = () => {

    const char = "Scroll down to explore".split("")
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time) {
            lenis.raf(time);
            ScrollTrigger.update()
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);


    })
    useGSAP(() => {
        const sections = gsap.utils.toArray(".section");

        sections.forEach((section) => {
            const content = section.querySelector(".content");

            gsap.set(content, { opacity: 0, y: 200 });
            gsap.to(content, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    duration: 1,
                    trigger: content,
                    start: "top+400 bottom",
                    end: "+=300",
                    scrub: true
                }
            })

            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "bottom center",
                onLeave: () =>
                    gsap.to(content, { opacity: 0, y: -50, duration: 0.5, ease: "cubic-bezier(0.33, 1, 0.68, 1)" }),
                onEnterBack: () =>
                    gsap.to(content, { opacity: 1, y: 0, duration: 0.5, ease: "cubic-bezier(0.33, 1, 0.68, 1)" }),
                onLeaveBack: () =>
                    gsap.to(content, { opacity: 0, y: 100, duration: 0.2, ease: "cubic-bezier(0.33, 1, 0.68, 1)" }),
            });
        });

        ScrollTrigger.create({
            trigger: ".outter",
            start: "top top",
            end: "bottom bottom",
            snap: 1 / 6,
            duration: 0.5


        });

    });





    return (
        <>
            <Box className="outter" sx={{
                width: "100vw",
                overflow: "hidden"
            }}>

                <Box className="Section-1 section"
                    sx={{
                        display: "flex",
                        height: "100vh",
                        width: "100vw",
                        overflow: "hidden",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Box className="content" sx={{
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
                    <Box className="content" sx={{
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

                <Box className="Section-2 section"
                    onClick={() => window.open("https://www.newzealand.com/in/", "_blank", "noopener,noreferrer")}
                    sx={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "center",
                        height: "100vh",
                        width: "100%",
                    }}
                >

                    <Country Name="NEW ZEALAND" Link="new-zealand.png" />
                </Box>
                <Box className="Section-3 section"
                    onClick={() => window.open("https://www.myswitzerland.com/en-in/", "_blank", "noopener,noreferrer")}
                    sx={{
                        display: "flex",
                        height: "100vh",
                        width: "100%",
                        justifyContent: 'center',
                        alignItems: "center"
                    }}>

                    <Country Link="switzerland.png" Name="SWITZERLAND" />

                </Box>
                <Box
                    onClick={() => window.open("https://www.japan.travel/en/", "_blank", "noopener,noreferrer")}

                    className="Section-4 section"
                    sx={{
                        display: "flex",
                        minHeight: "100vh",
                        width: "100%",
                    }}>

                    <Country Link="japan.png" Name="JAPAN" />

                </Box>
                <Box
                    onClick={() => window.open("https://english.visitkorea.or.kr/svc/main/index.do", "_blank", "noopener,noreferrer")}

                    className="Section-6 section"
                    sx={{
                        display: "flex",
                        minHeight: "100vh",
                        width: "100%",
                    }}>

                    <Country Link="korea.png" Name="SOUTH KOREA" />

                </Box>
                <Box
                    onClick={() => window.open("https://knowindia.india.gov.in/", "_blank", "noopener,noreferrer")}
                    className="Section-7 section"
                    sx={{
                        display: "flex",
                        minHeight: "100vh",
                        width: "100%",
                    }}>

                    <Country Link="india.png" Name="INDIA" />

                </Box>
                <Box
                    onClick={() => window.open("https://www.efexploreamerica.com/?sourcecode=PS_G_FT_HOVERBOX_EA_S26&utm_source=google&utm_campaign=freetrip&utm_segment=teacher&utm_group=ea&utm_season=s26&utm_medium=ppc&gad_source=1&gclid=CjwKCAiAkc28BhB0EiwAM001TYImfkPymb_u0O7jhHDvXn0hUWt8aeKLV4mQzCLcbh8RJWzOTY2w7xoC_iMQAvD_BwE", "_blank", "noopener,noreferrer")}
                    className="Section-8 section"
                    sx={{
                        display: "flex",
                        minHeight: "100vh",
                        width: "100%",
                    }}>

                    <Country Link="united-states.png" Name="UNITED STATES" />

                </Box>
            </Box>
        </>
    )
}

export default Home;
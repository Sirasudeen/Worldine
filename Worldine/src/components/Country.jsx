import { Box, Typography } from '@mui/material'
import React from 'react'
import TiltedCard from '../Animations/Components/TiltedCard/TiltedCard.jsx';
import TextPressure from '../Animations/TextAnimations/TextPressure/TextPressure'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const Country = ({ Link, Name }) => {

    return (
        <Box
            sx={{
                display: "flex",
                width: "100vw",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"

            }}
        >
            <Box
                className="content"
                sx={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: "3vh",
                    width: "50%"
                }}
            >
                <TiltedCard
                    imageSrc={Link}
                    altText="Click to explore"
                    captionText="Click to explore"
                    containerHeight="50vh"
                    containerWidth="30vw"
                    imageHeight="50vh"
                    imageWidth="clamp(4rem,45vw,30rem)"
                    rotateAmplitude={12}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={false}

                />
                <TextPressure
                    text={Name}
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="black"
                    strokeColor="white"
                    minFontSize={40}
                />
            </Box>




        </Box >
    )
}

export default Country
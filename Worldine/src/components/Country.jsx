import { Box, Typography } from '@mui/material'
import React from 'react'
import DecayCard from '../Animations/Components/DecayCard/DecayCard'
import TextPressure from '../Animations/TextAnimations/TextPressure/TextPressure'

const Country = ({ Link, Name }) => {
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"

            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: "10%",
                    width: "50%"
                }}
            >
                <DecayCard width={500} height={500} image={Link}>
                </DecayCard>
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
                    minFontSize={60}
                />
            </Box>




        </Box >
    )
}

export default Country
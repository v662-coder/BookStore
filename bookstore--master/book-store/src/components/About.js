import { Box ,Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is Techisor internship coding Assignment
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          By MERN STACK
        </Typography>
      </Box>
  )
}

export default About

import React from 'react'
import { Box, Typography, Button} from '@mui/material'
import HeroBannerImg from '../assets/images/banner.png'
import './mycss.css'
const HeroBanner = () => {
  return (
    <Box sx={{mt:'215px', ml:'50px'}}>
      <Typography fontWeight='600' fontSize='24px' color='#FF2625'>Fitness Club</Typography>
      <Typography fontWeight='700' fontSize='44px' mt='23px' mb='30px'>Sweat, Smile <br/> And Repeat</Typography>
      <Typography fontSize='22px' color='grey' lineHeight="35px">Check out the most effective exercises personalised to yoo</Typography>
      <Button  variant="contained" color="error" href='#exercises' sx={{mt:'45px', padding:'10px'}}>Explore Exercises</Button>
      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1'}} fontSize='200px' >Exercises</Typography>
      <img src={HeroBannerImg} alt='404 herobannerimg' className='herobanner-img'/>
    </Box>
  )
}

export default HeroBanner

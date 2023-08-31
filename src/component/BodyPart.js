import { Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack 
    className='bodyPart-card'
    alignItems='center'
    justifyContent='center'
    type='button'
    sx={{
        borderTop: bodyPart === item ? '4px solid red' : '',
        backgroundColor: '#fff',
        width: '270px',
        borderBottomLeftRadius: '20px',
        height: '280px',
        gap: '47px',
        cursor: 'pointer'
    }}
    onClick={()=> {
        setBodyPart(item)
        window.scrollTo({ top: 1650, left: 100, behavior: 'smooth' });
    }}
    >
      <img src={Icon} alt='404 dumbbell' style={{width:'40px', height:'40px'}}/>
      <Typography fontSize='24px' fontWeight='bold' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart

import {Box, Stack, Typography, Button} from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'

export const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '212px', xs: '70px'},
      ml: {sm: '50px'}
    }}
      position="relative" p="20px"
    >
      <Typography
        color="#16DB65"
        fontWeight="600"
        fontSize="26px"
        >
        Fitness Club
      </Typography>
      <Typography fontWeight={700}
        sx={{fontSize: {lg: '44px', xs: '40px'}}}
        mb="23px" mt="30px" color="#fff"
      >
        Work, Rest, Eat <br/> and Repeat
      </Typography>
      <Typography
        fontSize="22px"
        lineHeight="35px"
        mb={4}
        color="#fff"
      >
        Check out the most effective excercises
      </Typography>
      <Button variant='contained' color="success" href='#excercises'
        sx={{backgroundColor: '#16DB65', padding: '10px'}}
      >
        Explore Excercises
      </Button>
      <Typography
        fontWeight={600}
        color="#16DB65"
        sx={{
          opacity: 0.2,
          display: {lg: 'block', xs: 'none'}
        }}
        fontSize="200px"
      >
        Excercise
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner-img" className='hero-banner-img'/>
    </Box>
  )
}

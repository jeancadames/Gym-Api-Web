import {Box, Typography, Stack} from '@mui/material';

import LogoAlt from '../assets/icons/logo-alt.png';


export const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#16DB65">
      <Stack gap="20px" flexDirection="row" justifyContent="center" alignItems='center' px="40px" py="24px">
        <img src={LogoAlt} alt="Logo" width="24px" height="24px"/>
        <Typography fontSize="14px" color="#fff">Made by Jean Adames. All rights reserved ®</Typography>
      </Stack>
    </Box>
  )
}

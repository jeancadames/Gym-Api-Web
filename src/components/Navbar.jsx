import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';

import Logo from '../assets/images/logo.png';

export const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{gap: {sm:'122px', xs: '40px'}, mt: {sm:'32px', xs: '20px'}, justifyContent: 'none'}}
      px="20px"
      >
      <Link to="/">
        <img src={Logo} alt='logo' style={{width: '48px', height: '48px', margin: '0 20px'}}/>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
        >
        <Link to="/" style={{textDecoration: 'none', color: '#16DB65', borderBottom: '3px solid #16DB65'}}>Home</Link>
        <a href="#excercises" style={{textDecoration: 'none', color: '#16DB65'}}>Excercises</a>
      </Stack>
    </Stack>
    )
}

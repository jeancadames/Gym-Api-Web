import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import { ExcerciseDetail, Home } from './pages/index';
import { Navbar, Footer } from './components/index';

export const Gym = () => {
    return (
    <Box width={400} sx={{width: {xl: '1488px'}}} m="auto">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/excercise/:id' element={<ExcerciseDetail/>}/>
        </Routes>
        <Footer/>
    </Box>
  )
}

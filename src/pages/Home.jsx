import { useState } from "react"
import {Box} from '@mui/material'
import { Excercises, HeroBanner, SearchExcercises } from "../components/index"
export const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [excercises, setExcercises] = useState([]);

  return (
    <Box>
      <HeroBanner/>
      <SearchExcercises setExcercises={setExcercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Excercises setExcercises={setExcercises} bodyPart={bodyPart} excercises={excercises}/>
    </Box>
  )
}

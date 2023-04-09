import { useState } from "react"
import { useEffect } from "react"
import { ExcerciseCard } from "./index"

import {Box, Stack, Typography} from '@mui/material'
import Pagination from '@mui/material/Pagination'

import {options, fetchData} from '../utils/fetchData'

export const Excercises = ({excercises, setExcercises, bodyPart}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const excercisesPerPage = 9;

  const indexOfLastExcercise = currentPage * excercisesPerPage;

  const indexOfFirstExcercise = indexOfLastExcercise - excercisesPerPage
  const currentExcercises = excercises.slice(indexOfFirstExcercise, indexOfLastExcercise);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({top: '1800', behavior: 'smooth'});
  }

  useEffect(() => {
    const fetchExcercisesData = async() => {
      let excercisesData = [];

      if(bodyPart === 'all'){
        excercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options);
      } else {
        excercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, options);
      }

      setExcercises(excercisesData);
    }

    fetchExcercisesData();
  
  }, [bodyPart])
  

  return (
    <Box id="excercises"
      sx={{mt: {lg: '110px'}}}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap: {lg: '110px', xs: '50px'}}}
        flexWrap="wrap" justifyContent="center"
      >
        {currentExcercises.map((excercise, index)=> {
          return(
            <ExcerciseCard key={index} excercise={excercise}/>
          )
        })}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {excercises.length > excercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(excercises.length / excercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

import { useEffect, useState } from 'react';

import {Box, Button, Stack, TextField, Typography} from '@mui/material';

import {options, fetchData} from '../utils/fetchData';
import { HorizontalScrollBar } from './HorizontalScrollBar';

export const SearchExcercises = ({setExcercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExcercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options);
      
      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExcercisesData();
  }, [])
  

  const handleSearch = async() => {
    if(search){
      const excercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options);

      const searchExcercises = excercisesData.filter(
        (excercise) => excercise.name.toLowerCase().includes(search)
        || excercise.target.toLowerCase().includes(search)
        || excercise.equipment.toLowerCase().includes(search)
        || excercise.bodyPart.toLowerCase().includes(search)
      )

      setSearch('');
      setExcercises(searchExcercises);
    }
  }

  return (
    <Stack
      alignItems="center" 
      mt="37px" 
      justifyContent="center"
      p="20px"
    >
      <Typography fontWeight="700" sx={{
        fontSize: {lg: '44px', sx: '30px'}}}
        mb='50px'
        textAlign="center"
        color="#fff"
        >
        Awesome Excercises You <br/>
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {fontWeight: '700', 
            border: 'none', borderRadius: '4px'},
            width: {lg: '800px', xs: '350px'},
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          value={search}
          onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
          placeholder="Search Excercises"
          type="text"
        />
        <Button className='search-btn'
          sx={{
            bgcolor: '#04471C',
            color: '#FFF',
            textTransform: 'none',
            width: {lg: '175px', xs: '80px'},
            fontSize: {lg: '20px', xs: '14px'},
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box 
        sx={{position: 'relative', width: '100%', p: '20px'}}
      >
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
    )
}

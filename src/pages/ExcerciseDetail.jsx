import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material';

import {options, fetchData, youtubeOptions} from '../utils/fetchData'
import { Detail, ExcerciseVideos, SimilarExcercises } from '../components/index';

export const ExcerciseDetail = () => {
  const [excerciseVideos, setExcerciseVideos] = useState([]);
  const [excerciseDetail, setExcerciseDetail] = useState({});
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipmentExcercises, setEquipmentExcercises] = useState([]);
  const {id} = useParams();

  
  useEffect(() => {
    
    const fetchExcercisesData = async() => {
      const excerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const excerciseDetailData = await fetchData(`${excerciseDbUrl}/exercises/exercise/${id}`, options);
      setExcerciseDetail(excerciseDetailData);
      const excerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${excerciseDetailData.name}`, youtubeOptions);

      setExcerciseVideos(excerciseVideosData.contents);

      const targetMuscleExcercisesData = await fetchData(`${excerciseDbUrl}/exercises/target/${excerciseDetailData.target}`, options);
      setTargetMuscle(targetMuscleExcercisesData);
      const equipmentExcercisesData = await fetchData(`${excerciseDbUrl}/exercises/equipment/${excerciseDetailData.equipment}`, options);
      setEquipmentExcercises(equipmentExcercisesData);
    }

    fetchExcercisesData();
  }, [id]);

  return (
    <Box>
      <Detail excerciseDetail={excerciseDetail}/>
      <ExcerciseVideos excerciseVideos={excerciseVideos} name={excerciseDetail.name}/>
      <SimilarExcercises targetMuscleExcercises={targetMuscle} equipmentExcercises={equipmentExcercises}/>
    </Box>
  )
}

import {Box, Stack, Typography} from '@mui/material';
import { HorizontalScrollBar, Loader } from './index';

export const SimilarExcercises = ({targetMuscleExcercises,   equipmentExcercises}) => {

  return (
    <Box sx={{ mt: {lg: '100px', xs: '0'}}}>
      <Typography variant="h3" mb="5" color="#fff">Exercises that target the same muscle group</Typography>
      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
        <HorizontalScrollBar data={targetMuscleExcercises?.slice(0,3)}/>
      </Stack>
      <Typography variant="h3" mb="5" color="#fff">Exercises that use the same equipment</Typography>
      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
        <HorizontalScrollBar data={equipmentExcercises?.slice(3,6)}/>
      </Stack>
    </Box>
  )
}

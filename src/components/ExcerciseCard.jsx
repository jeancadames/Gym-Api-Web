import {Link} from 'react-router-dom';
import {Button, Stack, Typography} from '@mui/material'

export const ExcerciseCard = ({excercise}) => {
  return (
    <Link className='exercise-card' to={`/excercise/${excercise.id}`}>
        <img src={excercise.gifUrl} alt={excercise.name} loading='lazy' />
        <Stack direction="row">
            <Button sx={{ml: '21px', color: '#fff', background: '#16DB65', fontSize: '14px', borderRadius: '20px', textTransform: "capitalize", textDecoration: 'none'}}>
                {excercise.bodyPart}
            </Button>
            <Button sx={{ml: '21px', color: '#fff', background: '#000', fontSize: '14px', borderRadius: '20px', textTransform: "capitalize", textDecoration: 'none'}}>
                {excercise.target}
            </Button>
        </Stack>
        <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="22px">
            {excercise.name}
        </Typography>
    </Link>
  )
}

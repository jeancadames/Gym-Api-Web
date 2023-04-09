import {Stack, Typography} from '@mui/material';

export const BodyPart = ({item, setBodyPart, bodyPart}) => {

  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className='bodyPart-card'
        sx={{
            borderTop: bodyPart === item ? '4px solid #16DB65' : 'none',
            backgroundColor: '#fff',
            borderBottomLeftRadius: '20px',
            width: '160px',
            height: '160px',
            cursor: 'pointer',
            gap: '20px',
        }}
        onClick={()=> {
            setBodyPart(item);
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
        }}
    >
        <img src={`src/assets/icons/${item}.png`} alt="dumbell" style={{width: '80px', height: '80px', mt: '20px'}} />
        <Typography 
            fontSize="18px"
            fontWeight="bold"
            color="#3A1212"
            textTransform="capitalize"
            >
            {item}
        </Typography>
    </Stack>
  )
}

import {Box, Stack, Typography} from '@mui/material'


export const ExcerciseVideos = ({excerciseVideos, name}) => {
  if(!excerciseVideos.length) return 'Loading...'
  return (
    <Box sx={{marginTop: {lg: '200px', xs: '20px'}}} p="20px">
      <Typography variant="h4" mb="33px" color="#fff">
        Watch <span style={{color: '#16DB65', textTransform: "capitalize"}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="space-around" flexWrap="wrap" alignItems="center"
        sx={{
          flexDirection: {lg: 'row'},
          gap: {lg: '20px', xs: '0'}
        }}
      >
        {
          excerciseVideos?.slice(0,3).map((item, index) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel='noreferrer'
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography variant="h5" color="#fff">
                  {item.video.title}
                </Typography>
                <Typography variant="h6" color="#fff">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))
        }

      </Stack>
    </Box>
  )
}

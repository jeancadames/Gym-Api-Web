import { useContext } from 'react';

import {Box, Typography} from '@mui/material';
import { BodyPart, ExcerciseCard } from './index';

import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

export const HorizontalScrollBar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
  return (
    <ScrollMenu>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {isBodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        : <ExcerciseCard excercise={item}/>
      }
      </Box>
    ))}
  </ScrollMenu>
  )
}

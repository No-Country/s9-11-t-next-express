"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

type Props = {
  stars: number 
} 

export default function BasicRating(props: Props) {

   
  const [value, setValue] = React.useState<number | null>(props.stars);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
        '& .MuiRating-iconFilled': { color: '#3483fa' },
      }}
    >
 
      <Typography component="legend"></Typography>
      <Rating name="read-only" value={value} readOnly />
     
    </Box>
  );
}
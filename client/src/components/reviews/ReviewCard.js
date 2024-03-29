import React, { useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


function ReviewCard(props){
// style={ current !== index ? { display: 'hidden' } : { display: "none" }}

  return (
      <Card sx={{width: '100%', backgroundColor: 'rgb(163, 177, 138)'}} >
        <CardContent>
          <Typography color="text.secondary" align='center' >
            {props.review.name}
          </Typography>
          <Rating value={props.review.rating} readOnly sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}  />
          <Typography variant="h5" align='center'>
            {props.review.content}
          </Typography>
        </CardContent>
      </Card>
  );
}
export default ReviewCard;

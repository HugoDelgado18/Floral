import React, { useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


function ReviewCard(props){


  return (
      <Card sx={{ minWidth: 500 }}  >
        <CardContent>
          <Typography color="text.secondary" align='center' >
            {props.review.name}
          </Typography>
          <Rating value={props.review.rating} readOnly  />
          <Typography variant="h5" align='center'>
            {props.review.content}
          </Typography>
        </CardContent>
      </Card>
  );
}
export default ReviewCard;

import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

function ReviewCreation(){
  const [reviewData, setReviewData ] = useState({
    reviewer: '',
    rating: 0,
    content: ''
  })
  const [starCount, setStarCount] =  useState(0);



  return (
        <Paper >
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Typography variant='h6'>Leave your review</Typography>
            <TextField
              name="Reviewer"
              variant="outlined"
              label="Reviewer"
              fullWidthvalue={reviewData.reviewer}
              onChange={(e) => setReviewData({ ...reviewData, reviewer: e.target.value})}
               />
             <Rating
                name="simple-controlled"
                value={starCount}
                onChange={(e, newValue) => {
                  setStarCount(newValue);
                  setReviewData({ ...reviewData, rating: e.target.value })
                }}
                size="small"
                 />
              <TextField
                 name="content"
                 variant="outlined"
                 label="content"
                 fullWidthvalue={reviewData.content}
                 onChange={(e) => setReviewData({ ...reviewData, content: e.target.value})}
                  />
             <Button>Submit</Button>
          </form>
        </Paper>
  );
}
export default ReviewCreation;

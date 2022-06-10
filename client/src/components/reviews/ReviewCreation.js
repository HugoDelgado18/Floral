import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReviews } from '../../actions/reviews';
// import FileBase from 'react-file-base64';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

function ReviewCreation(){
  const [reviewData, setReviewData ] = useState({
    name: '',
    rating: 0,
    content: ''
  })
  const [starCount, setStarCount] =  useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createReviews(reviewData))
  }


  return (
      <Box
        sx={{
          display: "flex",
          flexWrap:'wrap',
          height: "200px",
          width: "600px"
        }}
        >
        <Grid sx={{flexGrow: 2}} container spacing={1}>
        <Paper variant="outlined" elevation={3} >
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Typography variant='h6'>Leave your review</Typography>
            <Grid spacing={4}>
              <Rating
                 name="simple-controlled"
                 value={starCount}
                 onChange={(e, newValue) => {
                   setStarCount(newValue);
                   setReviewData({ ...reviewData, rating: e.target.value })
                 }}
                 size="large"
                  />
                </Grid>
                <Grid spacing={4}>
            <TextField
              name="name"
              variant="outlined"
              label="name"
              fullWidth
              value={reviewData.reviewer}
              onChange={(e) => setReviewData({ ...reviewData, name: e.target.value})}
               />
             </Grid>
             <Grid spacing={4}>
              <TextField
                 name="content"
                 variant="outlined"
                 label="content"
                 fullWidth
                 value={reviewData.content}
                 onChange={(e) => setReviewData({ ...reviewData, content: e.target.value})}
                  />
              </Grid>
             <Button variant='contained' color="primary" size="large" type="submit" fullWidth>Submit</Button>
          </form>
        </Paper>
        </Grid>
      </Box>
  );
}
export default ReviewCreation;

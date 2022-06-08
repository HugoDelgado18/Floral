import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Rating from '@mui/material/Rating';
import InputLabel from '@mui/material/InputLabel';

function ReviewCreation(){
  return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': {m: 1}
        }}
        noValidate
        >
      <Grid container spacing={2}>
      <FormControl variant='standard'>
        <Typography>Make Your Review!</Typography>
        <InputLabel></InputLabel>


          <input
            name="title"
            placeholder="Title"
          />
          <textarea
            name="content"
            placeholder="What's your review..."
            rows="3"
          />
          <button type="submit"> submit </button>
      </FormControl>
      </Grid>
      </Box>
  );
}
export default ReviewCreation;

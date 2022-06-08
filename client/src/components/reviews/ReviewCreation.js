import React from 'react';
import Box from '@mui/material/Box';
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
      <p>Make your review!</p>
      <FormControl variant='standard'>
        <InputLabel>Make Your Review!</InputLabel>


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
      </Box>
  );
}
export default ReviewCreation;

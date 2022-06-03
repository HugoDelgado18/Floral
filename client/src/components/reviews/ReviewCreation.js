import React from 'react';
import FormControl from '@mui/material/FormControl';

function ReviewCreation(){
  return (
    <div>
      <p>Make your review!</p>
      <form  id="review-form">
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
      </form>
    </div>
  );
}
export default ReviewCreation;

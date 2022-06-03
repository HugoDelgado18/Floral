import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
   name: String,
   rating: {
     type: Number,
     required: {$lte: 5}
   },
   content: String
 });

 const Review = mongoose.model("Review", reviewSchema);


export default Review;
 // const review = new Review({
 //   name: Leah,
 //   rating: 5,
 //   content: "This place is great!!"
 // })

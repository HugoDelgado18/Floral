import mongoose from 'mongoose';

const reviewsSchema = new mongoose.Schema({
   name: String,
   rating: Number,
   content: String,
   createdAt: {
     type: Date,
     default: new Date()
   },
 });

 const Review = mongoose.model("Review", reviewsSchema);

 // const review = new Review({
 //   name: "Leah",
 //   rating: 5,
 //   content: "This place is great!!"
 // })


export default Review;

import Review from '../models/postReview.js';


export const getReviews = async (req, res) => {
    try {

      const postReviews = await Review.find();

      console.log(postReviews);

      res.status(200).json(postReviews);
    } catch (error) {

      res.status(404).json({message: error.message});
    }
  }

export const createReviews = async (req, res) => {
  const reviewDetails = req.body;

  const review = new Review(reviewDetails)

    try {
      await review.save();

      res.status(200).json(review)
    } catch (error) {

      res.status(409).json({message: error.message})
    }
}

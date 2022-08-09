import axios from 'axios';

const url = 'http://localhost:3002/reviews';

export const fetchReviews = () => axios.get(url);
export const createReviews = (newReview) => axios.post(url, newReview)

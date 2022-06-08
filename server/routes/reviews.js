import express from 'express';
import bodyParser from 'body-parser';

var urlencodedParser = bodyParser.urlencoded({ extended: false })

import { getReviews, createReviews } from '../controllers/reviews.js';

const router = express.Router();

  router.get("/", getReviews );

  router.post("/", urlencodedParser, createReviews);


export default router;

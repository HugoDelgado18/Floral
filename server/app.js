import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import https from 'https';
import reviewRoutes from './routes/reviews.js';
import cors from 'cors';
import mongoose from 'mongoose';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

const app = express();
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
app.use(cors());
app.use('/reviews', reviewRoutes);

const safePORT = process.env.ATLAS_KEY || 3002;

main().catch(err => console.log(err));

async function main(){
  // mongoose.connect(process.env.ATLAS_KEY)
  mongoose.connect(safePORT)
  .then(() => app.listen(safePORT, () => console.log(`Successfully opened port: ${safePORT}`)))

  // mongoose.connect(CONNECTION_URL);
};


  app.use(notFoundMiddleware)
  app.use(errorHandlerMiddleware);



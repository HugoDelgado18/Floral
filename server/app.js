import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import https from 'https';
import cors from 'cors';
import mongoose from 'mongoose';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

// reviewRoutes
import reviewRoutes from './routes/reviews.js';

const app = express();

app.use('/reviews', reviewRoutes);
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
app.use(cors());
const PORT = process.env.PORT || 5000;

main().catch(err => console.log(err));

async function main(){
  mongoose.connect(process.env.ATLAS_KEY)
  // mongoose.connect(CONNECTION_URL);
};


  app.use(notFoundMiddleware)
  app.use(errorHandlerMiddleware);



  app.listen( PORT, function(){
    console.log(`Successfully opened port: ${PORT}`);
  })

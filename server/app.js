import 'dotenv/config';
import express from 'express';
import https from 'https';
import cors from 'cors';
import mongoose from 'mongoose';

import reviewRoutes from './routes/reviews.js';

const app = express();

app.use('/reviews', reviewRoutes);

app.use(express.urlencoded({extended: true}));
app.use(cors());
// app.use("/public", express.static(__dirname + "/public"));
const PORT = process.env.PORT || 5000;

main().catch(err => console.log(err));

async function main(){
  mongoose.connect(process.env.ATLAS_KEY)
  // mongoose.connect(CONNECTION_URL);
};





  app.listen(process.env.PORT || 5000, function(){
    console.log('Successfully opened port:5000');
  })

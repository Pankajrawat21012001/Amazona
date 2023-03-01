import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();

mongoose
  // .connect(process.env.MONGODB_URI)
  .connect(process.env.MONGODB_LOCAL)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.log('ERROR while connect to Database', err, message);
  });

const app = express();
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`Server Successfully Started at http://localhost:${port}`);
});

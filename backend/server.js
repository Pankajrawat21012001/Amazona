import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', function (req, res) {
  res.send(data);
});

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`Server Successfully Started at http://localhost:${port}`);
});

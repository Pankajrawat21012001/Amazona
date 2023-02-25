import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', function (req, res) {
  res.send(data);
});

app.get('/api/products/slug/:slug', function (req, res) {
  // res.send(data);
  // console.log(req.params.slug);
  const product = data.products.find((x) => x.slug === req.params.slug);
  // console.log(product);
  if (product) {
    res.send(product);
    // console.log('sent');
  } else {
    res.status(404).send({ message: 'Product not found' });
    // console.log('error');
  }
});

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`Server Successfully Started at http://localhost:${port}`);
});

const express = require('express');
const proxy = require('http-proxy-middleware');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(proxy('/api-product-data', {target: 'http://localhost:3003'}));
app.use(proxy('/api-reviews', {target: 'http://localhost:3003'}));
app.use(express.static('public/lib'));
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
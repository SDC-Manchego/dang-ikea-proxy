require('newrelic');
const express = require('express');
const proxy = require('http-proxy-middleware');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(proxy('/api-product-data', {target: 'http://ec2-3-15-12-216.us-east-2.compute.amazonaws.com:3003/'}));
app.use(proxy('/api-reviews', {target: 'http://ec2-3-15-12-216.us-east-2.compute.amazonaws.com:3003/'}));
app.use(express.static('public/lib'));
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});

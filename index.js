const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const connectDB = require('./mongoDB.js');
const dbUrl =
  'mongodb+srv://123:123@cluster0.rdafqy5.mongodb.net/?retryWrites=true&w=majority';

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  connectDB(dbUrl)
    .then(() => {
      console.log(`Example app listening at http://localhost:${port}`);
      console.log('connected');
    })
    .catch((err) => {
      console.log(err);
    });
});

const express = require('express');
const cors = require("cors");
const app = express();
const port = 3010;
const path = require('path');
const connectDB = require('./mongoDB.js');
const authRouter = require('./Routes/auth.routes.js');
const uploadRouter = require('./controller/upload.controller.js');


const dbUrl =
  'mongodb+srv://123:123@cluster0.rdafqy5.mongodb.net/?retryWrites=true&w=majority';


app.use(cors());
app.use(express.json());
app.use(express.static('static'));


app.use("/auth" , authRouter) ;
app.use("/upload", uploadRouter);

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

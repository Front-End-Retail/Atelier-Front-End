const express = require('express');
const path = require('path');
require('dotenv').config();
const {getReviews} = require('./controllers/reviewControllers')

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());

console.log(path.join(__dirname, '/../client/dist'))

//sets up middleware to add github API key to every request
app.use((req, res, next) => {
  res.setHeader({'Authorization' : process.env.GITHUB_API_KEY})
  next()
});


app.get('/reviews', getReviews)
//other option for default author headers in axios
//axios.defaults.headers.common['Authorization'] = `process.env.GITHUB_API_KEY`;

//ROUTES BELOW

app.listen(3001);
console.log('Listening on port 3001');
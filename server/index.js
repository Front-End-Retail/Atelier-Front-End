const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.json());

//sets up middleware to add github API key to every request
app.use(function(req, res, next) {
  req.setHeader(Authorization: process.env.GITHUB_API_KEY)
  next()
})

//other option for default autho headers in axios
//axios.defaults.headers.common['Authorization'] = `process.env.GITHUB_API_KEY`;

//ROUTES BELOW

app.listen(3001);
console.log('Listening on port 3001');
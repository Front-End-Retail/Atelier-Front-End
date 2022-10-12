const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());


app.listen(3001);
console.log('Listening on port 3001');
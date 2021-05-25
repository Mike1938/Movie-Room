const express = require('express');
const app = express();
require('dotenv').config();
const axios = require('axios');
const ejs = require('ejs');

app.get('/', (req, res) => {
    res.send('homepage');
});



app.listen(3000, () => {
    console.log('Server running at port 3000');
})
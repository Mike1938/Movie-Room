const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const axios = require('axios');
const ejs = require('ejs');
const { response } = require('express');

app.set("view engine", 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/legal', (req, res) => {
    res.render('legal');
})
const verifyImg = data => {
    for (let i = 0; i < data.length; i++) {
        let poster = data[i].Poster;
        if (poster === 'N/A') {
            poster = "/images/notFound.jpg"
            data[i].Poster = poster
        }
    }
    return data;
}
const verifyStrLen = data => {
    for (let str of data) {
        let title = str.Title;
        if (title.length > 35) {
            str.Title = `${title.slice(0, 35)}...`;
        }
    }
    return data;
}
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.render('search', { error: "No movie was typed, Try Again" });
    }
    else {
        axios.get(`http://www.omdbapi.com/?apikey=${process.env.apikey}&s=${q}&type=movie`)
            .then((response) => {
                const results = response.data.Search;
                if (response.data.Response === 'False') {
                    res.render('results', { data: results, search: q });
                } else {
                    verifyImg(results);
                    verifyStrLen(results);
                    res.render('results', { data: results, search: q })
                }
            })
            .catch((e) => {
                console.log(e);
                res.render('Theres an error');
            })
    }
})
app.listen(3000, () => {
    console.log("Server running on port 3000");
})
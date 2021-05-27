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
const fetchMovies = async (search , type) =>{
    let searchMethod;
    if(type === 'id'){
        searchMethod = `&i=${search}`
    }else{
        searchMethod = `&s=${search}&type=movie`
    }
    try{
        const results = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.apikey}${searchMethod}`)
        return results.data
    }
    catch(e){
        console.log(e)
    }
}
app.get('/search', async(req, res) => {
    const { q } = req.query;
    if (!q) {
        res.render('search', { error: "No movie was typed, Try Again" });
    }
    else {
            const results = await fetchMovies(q, 'search');
            if (results.Response === 'False') {
                res.render('results', { data: results.Response, search: q });
            } else {
                verifyImg(results.Search);
                verifyStrLen(results.Search);
                res.render('results', { data: results.Search, search: q })
            }
    }
})
app.get('/search/movieDetails/:movId', async (req, res)=>{
    const {movId} = req.params;
    const results = await fetchMovies(movId, 'id');
    if (results.Response === 'False') {
        res.render('individualMovies', { data: results.Response, search: movId });
    } else {
        verifyImg(results);
        res.render('individualMovies', { data: results})
    }
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})
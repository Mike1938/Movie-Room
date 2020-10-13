const movieId = new URLSearchParams(window.location.search);
axios(`http://www.omdbapi.com/?apikey=${key.apiKey}&i=${movieId.get("movieId")}`)
    .then((response) => {
        if (response.data.Response === "False") {
            window.location.replace("/pages/search.html");
        }
        console.log(response.data);
        const movie = response.data;
        $("#movie").append(
            `<img id="poster" src="${movie.Poster}" alt="">
            <div id="sec2">
            <h1 id="title">${movie.Title} <span id="year">${movie.Year}</span></h1>
            <p>${movie.Plot}</p>
            <p>Director: ${movie.Director}</p>
            <p>Genre: ${movie.Genre}</p>
            </div>
            <div id="sec3">
            <p>Rated: ${movie.Rated}</p>
            <p>Rating: ${movie.imdbRating}</p>
            </div>`
        )
    })
    .catch((error) => {
        console.log(error);
    })
const movieId = new URLSearchParams(window.location.search);
axios(`http://www.omdbapi.com/?apikey=${key.apiKey}&i=${movieId.get("movieId")}`)
    .then((response) => {
        if (response.data.Response === "False") {
            window.location.replace("/pages/search.html");
        }
        console.log(response.data);
        const movie = response.data;
        $("#movie").append(
            `<div id="sec1"><img id="poster" src="${movie.Poster}" alt=""></div>
            <div id="sec2">
            <h1 id="title">${movie.Title} <span id="year">(${movie.Year})</span></h1>
            <p>${movie.Plot}</p>
            <p><span>Genre:</span> ${movie.Genre}</p>
            <p><span>Runtime:</span> ${movie.Runtime}</p>
            <p><span>Released:</span> ${movie.Released}</p>
            </div>
            <div id="sec3">
            <p><span>Rated:</span> ${movie.Rated}</p>
            <p><span>Rating:</span> ${movie.imdbRating}</p>
            <p><span>Director:</span> ${movie.Director}</p>
            <p><span>Writers:</span> ${movie.Writer}</p>
            <p><span>Actors:</span> ${movie.Actors}</p>
            <p><span>Director:</span> ${movie.Director}</p>
            </div>`
        )
    })
    .catch((error) => {
        console.log(error);
    })
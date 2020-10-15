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
            <p class="info">${movie.Plot}</p>
            <p class="info"><span>Genre:</span> ${movie.Genre}</p>
            <p class="info"><span>Runtime:</span> ${movie.Runtime}</p>
            <p class="info"><span>Released:</span> ${movie.Released}</p>
            </div>
            <div id="sec3">
            <p class="info"><span>Rated:</span> ${movie.Rated}</p>
            <p class="info"><span>Rating:</span> ${movie.imdbRating}</p>
            <p class="info"><span>Director:</span> ${movie.Director}</p>
            <p class="info"><span>Writers:</span> ${movie.Writer}</p>
            <p class="info"><span>Actors:</span> ${movie.Actors}</p>
            <p class="info"><span>Production:</span> ${movie.Production}</p>
            </div>`
        )
    })
    .catch((error) => {
        console.log(error);
    })
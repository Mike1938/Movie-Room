const movieId = new URLSearchParams(window.location.search);
axios(`http://www.omdbapi.com/?apikey=${key.apiKey}&plot=full&i=${movieId.get("movieId")}`)
    .then((response) => {
        if (response.data.Response === "False") {
            window.location.replace("/pages/search.html");
        }
        console.log(response.data);
        const movie = response.data;
        $("#movie").append(
            `
                <div id="moviePoster"><img id="poster" src="${movie.Poster}" alt=""></div>
                    <div id="shortInfo">
                        <h1 id="title">${movie.Title}</h1>
                    <ul>
                        <li class="info"><span>Genre:</span> ${movie.Genre}</li>
                        <li class="info"><span>Runtime:</span> ${movie.Runtime}</li>
                        <li class="info"><span>Released:</span> ${movie.Released}</li>
                        <li class="info"><span>Rated:</span> ${movie.Rated}</li>
                        <li class="info"><span>Rating:</span> ${movie.imdbRating}/10</li>
                        <li class="info"><span>Awards:</span> ${movie.Awards}</li>
                    </ul>
                </div>
                <div id="lgInfo">
                <h2>plot</h2>
                    <p class="info">${movie.Plot}</p>
                    <p class="info"><span>Director:</span> ${movie.Director}</p>
                    <p class="info"><span>Writers:</span> ${movie.Writer}</p>
                    <p class="info"><span>Actors:</span> ${movie.Actors}</p>
                    <p class="info"><span>Production:</span> ${movie.Production}</p>
                </div>
            `
        )
    })
    .catch((error) => {
        console.log(error);
    })
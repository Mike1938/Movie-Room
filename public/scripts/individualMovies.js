const movieId = new URLSearchParams(window.location.search);
axios(`http://www.omdbapi.com/?apikey=${key.apiKey}&plot=full&i=${movieId.get("movieId")}`)
    .then((response) => {
        if (response.data.Response === "False") {
            window.location.replace("/pages/search.html");
        }
        const movie = response.data;
        let moviePoster = movie.Poster;
        if (moviePoster === "N/A") {
            moviePoster = "/images/notFound.jpg";
        }
        $("#movie").append(
            `
                <div id="moviePoster"><img id="poster" src="${moviePoster}" alt=""></div>
                    <div id="shortInfo">
                        <h1 id="title">${movie.Title}</h1>
                    <ul>
                        <li class="info"><span class = 'infoLabel'>Genre:</span> ${movie.Genre}</li>
                        <li class="info"><span class = 'infoLabel'>Runtime:</span> ${movie.Runtime}</li>
                        <li class="info"><span class = 'infoLabel'>Released:</span> ${movie.Released}</li>
                        <li class="info"><span class = 'infoLabel'>Rated:</span> ${movie.Rated}</li>
                        <li class="info"><span class = 'infoLabel'>Rating:</span> <span id="ratingStar"><i class="fas fa-star fa-xs"></i></span> ${movie.imdbRating}/10</li>
                        <li class="info"><span class = 'infoLabel'>Awards:</span> ${movie.Awards}</li>
                    </ul>
                </div>
                <div id="lgInfo">
                <h2>plot</h2>
                    <p class="info">${movie.Plot}</p>
                    <p class="info"><span class = 'infoLabel'>Director:</span> ${movie.Director}</p>
                    <p class="info"><span class = 'infoLabel'>Writers:</span> ${movie.Writer}</p>
                    <p class="info"><span class = 'infoLabel'>Actors:</span> ${movie.Actors}</p>
                    <p class="info"><span class = 'infoLabel'>Production:</span> ${movie.Production}</p>
                </div>
            `
        )
    })
    .catch((error) => {
        console.log(error);
    })
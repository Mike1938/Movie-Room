$(document).ready(function () {
    const movieSearch = new URLSearchParams(window.location.search);
    if (movieSearch.get("search") === null) {
        window.location.replace("search.html");
    } else {
        axios.get(`http://www.omdbapi.com/?apikey=${key.apiKey}&s=${movieSearch.get("search")}&type=movie`)
            .then((response) => {
                $("h1").text(`Movie results for "${movieSearch.get("search")}"`);
                const results = response.data.Search;
                if (results === undefined) {
                    $("#movieContainer").append(`<h1 id="wasNotFound">The Movie "${movieSearch.get("search")}" was not found, please try again...</h1>`);
                } else {
                    $.each(results, (index, movie) => {
                        let movieTitle = movie.Title;
                        if (movieTitle.length > 35) {
                            movieTitle = `${movie.Title.slice(0, 40)} ...`;
                        }
                        $("#movieContainer").append(
                            `<div>
                            <h3>${movieTitle}</h3>
                            <img class"size" src="${movie.Poster}" alt="Img not found">
                            <p>${movie.Year}</p>
                            <form action="/pages/individualMovies.html" method="GET">
                            <button name="movieId" value="${movie.imdbID}">More Info</button>
                            </form>
                        </div>`
                        )
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
});
$(document).ready(function () {
    const movieSearch = new URLSearchParams(window.location.search);
    if (movieSearch.get("search") === null) {
        window.location.replace("search.html")
    } else {
        axios.get(`http://www.omdbapi.com/?apikey=${key.apiKey}&s=${movieSearch.get("search")}&type=movie`)
            .then((response) => {
                const results = response.data.Search;
                console.log(results)
                $("h1").text(`Movie results for "${movieSearch.get("search")}"`)
                $.each(results, (index, movie) => {
                    $("#movieContainer").append(
                        `<div>
                    <h3>${movie.Title}</h3>
                    <img class"size" src="${movie.Poster}" alt="Img not found">
                    <p>${movie.Year}</p>
                    <form action="#" method="GET">
                    <button value="${movie.imdbID}">More Info</button>
                    </form>
                    </div>`
                    )
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
})
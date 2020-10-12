$(document).ready(function () {
    const movieSearch = new URLSearchParams(window.location.search);
    axios.get(`http://www.omdbapi.com/?apikey=${key.apiKey}&s=${movieSearch.get("search")}&type=movie`)
        .then((response) => {
            const results = response.data.Search;
            $("h1").text(`Movie results for "${movieSearch.get("search")}"`)
            console.log(results);
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
})
const movieId = new URLSearchParams(window.location.search);
axios(`http://www.omdbapi.com/?apikey=${key.apiKey}&i=${movieId.get("movieId")}`)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    })
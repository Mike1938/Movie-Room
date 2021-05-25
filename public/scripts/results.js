// $(document).ready(function () {
//     const movieSearch = new URLSearchParams(window.location.search);
//     //?This is if they jump to the results page without having a value of a search then it will redirect to the search.html
//     if (movieSearch.get("search") === null) {
//         window.location.replace("search.html");
//     } else {
//         axios.get(`http://www.omdbapi.com/?apikey=${key.apiKey}&s=${movieSearch.get("search")}&type=movie`)
//             .then((response) => {
//                 $("h1").text(`Movie results for "${movieSearch.get("search")}"`);
//                 //?if statement to check the response of the search if === undefined then theres an alternate result saying movie not found
//                 const results = response.data.Search;
//                 if (results === undefined) {
//                     $("#movieContainer").append(`<h1 id="wasNotFound">The Movie "${movieSearch.get("search")}" was not found, please try again...</h1>`);
//                 } else {
//                     $.each(results, (index, movie) => {
//                         //?If statement to check if the image is === to N/A then use NotFound.jpg
//                         let moviePoster = movie.Poster;
//                         if (moviePoster === "N/A") {
//                             moviePoster = "/images/notFound.jpg";
//                         }
//                         //?If statment that if the movie title length is grater than 35 then slice the title and add ... at the end
//                         let movieTitle = movie.Title;
//                         if (movieTitle.length > 35) {
//                             movieTitle = `${movie.Title.slice(0, 40)} ...`;
//                         }
//                         //?This is to append all the information from the omdb api to the html in the movieContainer area
//                         $("#movieContainer").append(
//                             `<div>
//                             <h3>${movieTitle}</h3>
//                             <img class = "size" src="${moviePoster}" alt="Img not found">
//                             <p>${movie.Year}</p>
//                             <form action="/pages/individualMovies.html" method="GET">
//                             <button name="movieId" value="${movie.imdbID}">More Info</button>
//                             </form>
//                         </div>`
//                         )
//                     });
//                 }
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }
// });
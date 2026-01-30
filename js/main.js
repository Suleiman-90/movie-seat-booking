import SeatManager from "./seatManager.js";
import { getMovies } from "./movieService.js";

document.addEventListener("DOMContentLoaded", async () => {
  new SeatManager(".container");

  const movieSelect = document.getElementById("movie");
  const movies = await getMovies();

  movies.forEach((movie, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = movie.name;
    movieSelect.appendChild(option);
  });

  // Store selected movie index for later phases
  let selectedMovieIndex = movieSelect.value;

  movieSelect.addEventListener("change", (event) => {
    selectedMovieIndex = event.target.value;
  });
});




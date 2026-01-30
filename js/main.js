import SeatManager from "./seatManager.js";
import { getMovies } from "./movieService.js";
import { updateSummary } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
  const movieSelect = document.getElementById("movie");
  const movies = await getMovies();

  movies.forEach((movie, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = movie.name;
    movieSelect.appendChild(option);
  });

  let selectedMovieIndex = movieSelect.value;

  const seatManager = new SeatManager(".container", (selectedSeats) => {
    const moviePrice = movies[selectedMovieIndex].price;
    updateSummary(selectedSeats, moviePrice);
  });

  movieSelect.addEventListener("change", (event) => {
    selectedMovieIndex = event.target.value;
    const selectedSeats = seatManager.getSelectedSeatCount();
    const moviePrice = movies[selectedMovieIndex].price;
    updateSummary(selectedSeats, moviePrice);
  });
});




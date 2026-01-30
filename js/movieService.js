import Movie from "./movie.js";

export async function getMovies() {
  const response = await fetch("http://localhost:3000/movies");

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const moviesData = await response.json();

  return moviesData.map(
    (movie) => new Movie(movie.name, movie.price)
  );
}


import Movie from "./movie.js";

export async function getMovies() {
  try {
    const response = await fetch("http://localhost:3000/movies");

    if (!response.ok) {
      throw new Error("API response not OK");
    }

    const moviesData = await response.json();

    return moviesData.map(
      (movie) => new Movie(movie.name, movie.price)
    );
  } catch (error) {
    console.warn(
      "JSON Server not available. Using fallback movie data.",
      error
    );

    return [
      new Movie("Fast and Furious 6", 100),
      new Movie("The Mummy Returns", 50),
      new Movie("Jumanji: Welcome to the Jungle", 70),
      new Movie("Rampage", 40),
    ];
  }
}


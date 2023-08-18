const API_KEY = "49094b3d069a3686843aa8c5cbda9006";
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchTrendingMoviesAndSeries() {
  const result = await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);

  const data = await result.json();
  console.log(data.results);
  return data.results;
}

export async function fetchGenres() {
  const result = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en`
  );

  const data = await result.json();
  console.log(data.genres);
  return data.genres;
}

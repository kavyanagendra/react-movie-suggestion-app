const API_KEY = "49094b3d069a3686843aa8c5cbda9006";
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchTrendingMoviesAndSeries() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTA5NGIzZDA2OWEzNjg2ODQzYWE4YzVjYmRhOTAwNiIsInN1YiI6IjY0ZGY1NDdmNWFiODFhMDBlMjViNTI4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wFS5hQdMhj9yVW3yU_388biY14oWV9spE-v4zV7Zkvk",
    },
  };

  const result = await fetch(
    `${BASE_URL}/account/20317965/favorite/movies?language=en-US&page=1&sort_by=created_at.asc'`,
    options
  );

  const data = await result.json();
  console.log(data.results);
  return data.results;
}

export async function fetchGenres() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTA5NGIzZDA2OWEzNjg2ODQzYWE4YzVjYmRhOTAwNiIsInN1YiI6IjY0ZGY1NDdmNWFiODFhMDBlMjViNTI4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wFS5hQdMhj9yVW3yU_388biY14oWV9spE-v4zV7Zkvk",
    },
  };

  const result = await fetch(
    `${BASE_URL}/genre/movie/list?language=en`,
    options
  );

  const data = await result.json();
  console.log(data.genres);
  return data.genres;
}

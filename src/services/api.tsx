export async function fetchTrendingMoviesAndSeries() {
  const response = await fetch("https://dummyapi.online/api/movies");
  const data = await response.json();
  return data;
}

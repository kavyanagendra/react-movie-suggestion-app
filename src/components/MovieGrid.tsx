import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import { fetchTrendingMoviesAndSeries } from "../services/api";
import { Movie } from '../types';

export const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTrendingMoviesAndSeries()
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <>
    {error && <Text>404 Something went wrong</Text>}
    <ul>
      {movies.map((movieItem) => (
        <li key={movieItem.id}>{movieItem.movie}</li>
      ))}
    </ul>
    </>
  );
};

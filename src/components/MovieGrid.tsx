import { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { MovieCard } from "./MovieCard";
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
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {movies.map((movieItem) => (
          <MovieCard key={movieItem.id} movie={movieItem} />
        ))}
      </SimpleGrid>
    </>
  );
};

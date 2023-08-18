import { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { MovieCard } from "./MovieCard";
import { fetchTrendingMoviesAndSeries } from "../services/api";
import { Movie } from '../types';
import { MovieCardSkeleton } from "./MovieCardSkeleton";

export const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading]= useState(false);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    setLoading(true);
    fetchTrendingMoviesAndSeries()
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {error && <Text>404 Something went wrong</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={10}
      >
        {loading &&
          skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}
        {!loading && movies.map((movieItem) => (
            <MovieCard key={movieItem.id} movie={movieItem} />
          ))}
      </SimpleGrid>
    </>
  );
};

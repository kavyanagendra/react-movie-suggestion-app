import { useEffect, useState } from "react";
import { SimpleGrid, Text, Box } from "@chakra-ui/react";
import { MovieCard } from "./MovieCard";
import { fetchTrendingMoviesAndSeries } from "../services/api";
import { Movie, Genre } from "../types";
import { MovieCardSkeleton } from "./MovieCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
}
export const MovieGrid = ({ selectedGenre }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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

  // Filter movies based on selected genre
  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre_ids.includes(selectedGenre.id))
    : movies;

  return (
    <>
      {error && <Text>404 Something went wrong</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={5}
      >
        {loading &&
          skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}
        {!loading &&
          (filteredMovies.length > 0 ? (
            filteredMovies.map((movieItem) => (
              <MovieCard key={movieItem.id} movie={movieItem} />
            ))
          ) : (
            <Box textAlign="center" gridColumn="span 4">
              No movies in this genre.
            </Box>
          ))}
      </SimpleGrid>
    </>
  );
};

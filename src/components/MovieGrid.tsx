import { useEffect, useState } from "react";
import { SimpleGrid, Text, Box } from "@chakra-ui/react";
import { MovieCard } from "./MovieCard";
import { fetchTrendingMoviesAndSeries } from "../services/api";
import { Movie, Genre } from "../types";
import { MovieCardSkeleton } from "./MovieCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
  searchText: string | "";
}
export const MovieGrid = ({ selectedGenre, searchText }: Props) => {
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

  // Filter movies based on selected genre and search text
  const filteredMovies = movies.filter((movie) => {
    const hasSelectedGenre =
      !selectedGenre || movie.genre_ids.includes(selectedGenre.id);

    const titleLowerCase =
      (movie.title ? movie.title.toLowerCase() : "") ||
      (movie.name ? movie.name.toLowerCase() : "");

    const searchTextLowerCase = searchText.toLowerCase();
    const hasSearchText =
      !searchText || titleLowerCase.includes(searchTextLowerCase);

    return hasSelectedGenre && hasSearchText;
  });

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

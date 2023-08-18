import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>();

  // Fetch movie details using movieId and display them here

  return (
    <Box>
      <Text>Movie ID: {movieId}</Text>
    </Box>
  );
};

export default MovieDetails;

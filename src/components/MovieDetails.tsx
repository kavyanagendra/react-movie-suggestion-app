import { useParams, useLocation } from "react-router-dom";
import { Box, Text, Image, Flex } from "@chakra-ui/react";

const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>();

  const location = useLocation();

  // Extract query parameters from the search string
  const queryParams = new URLSearchParams(location.search);
  const poster_path = queryParams.get("poster_path");
  const title = queryParams.get("title");
  const overview = queryParams.get("overview");
  const vote_count = queryParams.get("vote_count");
  const popularity = queryParams.get("popularity");

  return (
    <Flex align="top" minHeight="50vh">
      <Flex
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w220_and_h330_bestv2/${poster_path}`}
          alt={`Movie Poster`}
          width={{ base: "100%", md: "auto" }}
        />
        <Box ml={{ base: 0, md: 4 }}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            {title}
          </Text>
          <Text>{overview}</Text>
          <Text>Vote Count: {vote_count}</Text>
          <Text>Vote Count: {popularity}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default MovieDetails;

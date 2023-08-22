import { useLocation } from "react-router-dom";
import { Box, Text, Image, Flex, Badge, VStack } from "@chakra-ui/react";
import { Movie } from "../types";

interface Props {
  movie: Movie | null;
}

const MovieDetails = ({ movie }: Props) => {
  return (
    <>
      {!movie && <h1>This movie does not exist</h1>}
      {movie && (
        <Flex justifyContent="center" alignItems="top" minHeight="50vh" py={8}>
          <Box
            width="100%"
            maxW="800px"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
          >
            <Flex direction={{ base: "column", md: "row" }}>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt={`Movie Poster`}
                width={{ base: "100%", md: "40%" }}
              />
              <VStack
                p={6}
                align="start"
                justify="center"
                width={{ base: "100%", md: "60%" }}
                spacing={4}
              >
                <Text fontSize="2xl" fontWeight="bold">
                  {movie?.title}
                </Text>
                <Text>{movie?.overview}</Text>
                <Flex justify="space-between" w="100%">
                  <Badge colorScheme="purple" fontSize="sm">
                    Vote Count: {movie?.vote_count}
                  </Badge>
                  <Badge colorScheme="blue" fontSize="sm">
                    Popularity: {movie?.popularity}
                  </Badge>
                </Flex>
              </VStack>
            </Flex>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default MovieDetails;

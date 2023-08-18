import { useLocation } from "react-router-dom";
import { Box, Text, Image, Flex, Badge, VStack } from "@chakra-ui/react";

const MovieDetails = () => {
  const location = useLocation();

  // Extract query parameters from the search string
  const queryParams = new URLSearchParams(location.search);
  const poster_path = queryParams.get("poster_path");
  const title = queryParams.get("title");
  const overview = queryParams.get("overview");
  const vote_count = queryParams.get("vote_count");
  const popularity = queryParams.get("popularity");

  return (
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
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
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
              {title}
            </Text>
            <Text>{overview}</Text>
            <Flex justify="space-between" w="100%">
              <Badge colorScheme="purple" fontSize="sm">
                Vote Count: {vote_count}
              </Badge>
              <Badge colorScheme="blue" fontSize="sm">
                Popularity: {popularity}
              </Badge>
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MovieDetails;

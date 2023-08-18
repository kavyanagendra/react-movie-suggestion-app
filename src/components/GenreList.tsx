import { useEffect, useState } from "react";
import { Genre } from "../types";
import { fetchGenres } from "../services/api";
import { HStack, List, ListItem, Text } from "@chakra-ui/react";

export const GenreList = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetchGenres()
      .then((data) => {
        setGenres(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
            <HStack>
                <Text fontSize="lg">{genre.name}</Text>
            </HStack>
        </ListItem>
      ))}
    </List>
  );
};

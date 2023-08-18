import { useEffect, useState } from "react";
import { Genre } from "../types";
import { fetchGenres } from "../services/api";
import { HStack, List, ListItem, Button } from "@chakra-ui/react";

interface Props{
    onSelectGenre: (genre: Genre)=> void;
}

export const GenreList = ({ onSelectGenre }: Props) => {
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
            <Button onClick={() => onSelectGenre(genre)} variant="link">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

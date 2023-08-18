import { useEffect, useState } from "react";
import { Genre } from "../types";
import { fetchGenres } from "../services/api";
import { HStack, List, ListItem, Button } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
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
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

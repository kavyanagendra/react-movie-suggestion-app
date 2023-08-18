import { useEffect, useState } from "react";
import { Genre } from "../types";
import { fetchGenres } from "../services/api";

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
  return <div>GenreList</div>;
};

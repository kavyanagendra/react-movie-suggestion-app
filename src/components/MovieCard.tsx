import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Movie } from "../types";
import noImage from "../assets/no-image-placeholder.png";

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  return (
    <Card width="100%" borderRadius={10} overflow={"hidden"}>
      <Link to={`/movie/${movie.id}`}>
        <Image
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`
              : noImage
          }
        />
        <CardBody>
          <Heading fontSize={"xl"}>{movie.title}</Heading>
        </CardBody>
      </Link>
    </Card>
  );
};

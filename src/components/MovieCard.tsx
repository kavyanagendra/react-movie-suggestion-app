import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Movie } from "../types";
import noImage from "../assets/no-image-placeholder.png";

interface Props {
  movie: Movie;
  handleClick: (selectedMovie: Movie) => void;
}

export const MovieCard = ({ movie, handleClick }: Props) => {

  const cardClicked =() =>{
    handleClick(movie);
  }

  return (
    <Card
      width="100%"
      borderRadius={10}
      overflow={"hidden"}
      onClick={cardClicked}
    >
      <Link
        to={{
          pathname: `/movie/${movie.id}`
        }}
      >
        <Image
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`
              : noImage
          }
        />
        <CardBody>
          <Heading fontSize={"xl"}>
            {movie.title ? movie.title : movie.name}
          </Heading>
        </CardBody>
      </Link>
    </Card>
  );
};

import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { MovieGrid } from "./components/MovieGrid";
import { GenreList } from "./components/GenreList";
import { Genre } from "./types";
import "./App.css";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding={5}>
        <MovieGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;

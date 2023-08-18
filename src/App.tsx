import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { MovieGrid } from "./components/MovieGrid";
import { GenreList } from "./components/GenreList";
import './App.css'

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <GenreList></GenreList>
        <MovieGrid />
      </GridItem>
    </Grid>
  );
}

export default App

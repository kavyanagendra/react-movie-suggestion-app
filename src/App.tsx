import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { MovieGrid } from "./components/MovieGrid";
import { GenreList } from "./components/GenreList";
import MovieDetails from "./components/MovieDetails";
import { Genre } from "./types";
import "./App.css";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [searchText, setSelectedSearch] = useState("");

  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
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
            <NavBar onSearch={(searchText) => setSelectedSearch(searchText)} />
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
            <Routes>
              <Route
                path="/"
                element={
                  <MovieGrid
                    selectedGenre={selectedGenre}
                    searchText={searchText}
                  />
                }
              />
              <Route path="/movie/:movieId" element={<MovieDetails />} />
            </Routes>
          </GridItem>
        </Grid>
      </Router>
    </ChakraProvider>
  );
}

export default App;

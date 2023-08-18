export interface Movie {
  id: number;
  title: string;
  vote_count: number;
  poster_path: string;
  release_date: string;
  genre_ids: number[];
}

export interface Genre {
  id: number;
  name: string;
}

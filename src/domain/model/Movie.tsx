export interface MovieTrendingResponse {
  page: number;
  results?: Movie[];
}

export default interface Movie {
  id: number;
  title?: string;
  original_language: string;
  original_title?: string;
  vote_count: number;
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date?: string;
  genre_id: number[];
  popularity: number;
  backdrop_path: string | null;
}

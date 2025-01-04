export interface MoviesResponse {
  items: Movie[]
}

export interface Movie {
  id: number
  name: string
  description: string
  duration: string
  rating: number
  poster: string
  genre: string
}

export interface MovieDetailsResponse {
  items: MovieDetails[]
}

export interface MovieDetails extends Movie {
  trivia: string[]
  actors: Actor[]
}

interface Actor {
  name: string
  imdb_id: string
}

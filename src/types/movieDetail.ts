export interface MovieDetailGenres {
  id: number
  name: string
}

export interface MovieDetailProductionCompanies {
  name: string
  id: number
  logo_path: string | null
  origin_country: string
}

export interface MovieDetailProductionCountries {
  iso_3166_1: string
  name: string
}

export interface MovieDetailSpokenLanguages {
  iso_639_1: string
  name: string
}

export interface MovieDetail {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection: null
  budget: number
  genres: MovieDetailGenres
  homepage: string | null
  id: number
  imdb_id: string | null
  original_language: string
  original_title: string
  overview: string | null
  popularity: number
  poster_path: string | null
  production_companies: MovieDetailProductionCompanies
  production_countries: MovieDetailProductionCountries
  release_date: string
  format: Date
  revenue: number
  runtime: number | null
  spoken_languages: MovieDetailSpokenLanguages
  status: string
  tagline: string | null
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

import AsyncStorage from '@react-native-async-storage/async-storage'
import {Alert} from 'react-native'
import {MovieDetail} from '../types/movieDetail'

export async function getMoviesSave() {
  const myMovies = await AsyncStorage.getItem('myMovies')

  let moviesSave = JSON.parse(String(myMovies)) || []

  return moviesSave
}

export async function saveMovie(newMovie: MovieDetail) {
  let moviesStored = await getMoviesSave()

  const hasMovie = moviesStored.some((item) => item.id === newMovie.id)

  if (hasMovie) {
    return deleteMovie(newMovie.id)
  }

  moviesStored.push(newMovie)

  await AsyncStorage.setItem('myMovies', JSON.stringify(moviesStored))
  alert('Movie saved in your favorites list...')
}

export async function deleteMovie(id) {
  let moviesStored = await getMoviesSave()

  let myMovies = moviesStored.filter((item) => {
    return item.id !== id
  })

  await AsyncStorage.setItem('myMovies', JSON.stringify(myMovies))
  alert('Movie removed from your favorites list...')
}

export async function hasMovie(movie: MovieDetail) {
  let moviesStored = await getMoviesSave()

  const hasMovie = moviesStored.find(
    (movieStored: MovieDetail) => movieStored.id === movie.id,
  )

  if (hasMovie) {
    return true
  }

  return false
}

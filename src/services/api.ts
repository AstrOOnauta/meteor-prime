import axios from 'axios'

export const key: string = '28fc232cc001c31e8a031f419d0a14ca'
export const imageURL: string = 'https://image.tmdb.org/t/p/original'

const api = axios.create({
  baseURL: 'http://api.themoviedb.org/3',
})

export default api

import React from 'react'

import {MovieDetailGenres} from '../../../types/movieDetail'
import {GenreContainer, Title} from './style'

export interface GenreProps {
  data: MovieDetailGenres
}

export default function Genre(props: GenreProps) {
  return (
    <GenreContainer>
      <Title>{props.data.name}</Title>
    </GenreContainer>
  )
}

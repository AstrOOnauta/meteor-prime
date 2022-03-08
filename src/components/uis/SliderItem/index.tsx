import React from 'react'
import {Ionicons} from '@expo/vector-icons'

import {
  BannerItem,
  Rate,
  RateContainer,
  SliderItemContainer,
  Title,
} from './style'
import {MoviesResults} from '../../../types/movies'
import {imageURL} from '../../../services/api'

export interface SliderItemProps {
  data: MoviesResults
  handleMovie: (item) => void
}

export default function SliderItem(props: SliderItemProps) {
  return (
    <SliderItemContainer
      activeOpacity={0.8}
      onPress={() => props.handleMovie(props.data)}
    >
      <BannerItem
        resizeMethod="resize"
        source={{
          uri: `${imageURL}${props.data.poster_path}`,
        }}
      />
      <Title numberOfLines={1}>{props.data.title}</Title>
      <RateContainer>
        <Ionicons name="md-star" size={12} color="#FFCD3C" />
        <Rate>{props.data.vote_average}/10</Rate>
      </RateContainer>
    </SliderItemContainer>
  )
}

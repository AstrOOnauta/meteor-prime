import React from 'react'
import {Ionicons} from '@expo/vector-icons'

import {
  BannerItem,
  Rate,
  RateContainer,
  SliderItemContainer,
  Title,
} from './style'

export default function SliderItem() {
  return (
    <SliderItemContainer activeOpacity={1}>
      <BannerItem
        source={{
          uri: 'https://images.unsplash.com/photo-1605294965592-eb6e54b215d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        }}
      />
      <Title numberOfLines={1}>IT CHAPTER II</Title>
      <RateContainer>
        <Ionicons name="md-star" size={12} color="#FFCD3C" />
        <Rate>9/10</Rate>
      </RateContainer>
    </SliderItemContainer>
  )
}

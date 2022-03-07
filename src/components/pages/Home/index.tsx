import React from 'react'
import {Text, ScrollView} from 'react-native'

import {Banner, BannerButton, HomeContainer, SliderMovies, Title} from './style'
import Header from '../../uis/Header'
import SearchBar from '../../uis/SearchBar'
import SliderItem from '../../uis/SliderItem'

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em cartaz</Title>
        <BannerButton activeOpacity={0.8}>
          <Banner
            resizeMethod="resize"
            source={{
              uri: 'https://images.unsplash.com/photo-1521898461100-618454f89314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
            }}
          />
        </BannerButton>
        <SliderMovies
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({item}) => <SliderItem />}
        />

        <Title>Populares</Title>
        <SliderMovies
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({item, index}) => <SliderItem key={index} />}
        />

        <Title>Mais votados</Title>
        <SliderMovies
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({item}) => <SliderItem />}
        />
      </ScrollView>
    </HomeContainer>
  )
}

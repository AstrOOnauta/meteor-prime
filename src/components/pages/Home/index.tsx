import React, {useState, useEffect} from 'react'
import {Text, ScrollView} from 'react-native'

import {Banner, BannerButton, HomeContainer, SliderMovies, Title} from './style'
import Header from '../../uis/Header'
import SearchBar from '../../uis/SearchBar'
import SliderItem from '../../uis/SliderItem'
import api, {key} from '../../../services/api'
import {MoviesResults} from '../../../types/movies'

export default function Home() {
  const [nowMovies, setNowMovies] = useState<MoviesResults | []>([])
  const [popularMovies, setPopularMovies] = useState<MoviesResults | []>([])
  const [topMovies, setTopMovies] = useState<MoviesResults | []>([])

  async function getNowMovies() {
    await api
      .get('/movie/now_playing', {
        params: {
          api_key: key,
        },
      })
      .then((response) => setNowMovies(response.data.results))
      .catch((error) => console.log(error))
  }

  async function getPopularMovies() {
    await api
      .get('/movie/popular', {
        params: {
          api_key: key,
        },
      })
      .then((response) => setPopularMovies(response.data.results))
      .catch((error) => console.log(error))
  }

  async function getTopMovies() {
    await api
      .get('/movie/top_rated', {
        params: {
          api_key: key,
        },
      })
      .then((response) => setTopMovies(response.data.results))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getNowMovies()
    getPopularMovies()
    getTopMovies()
  }, [])

  if (
    nowMovies === undefined ||
    popularMovies === undefined ||
    topMovies === undefined
  ) {
    return <HomeContainer>Loading...</HomeContainer>
  } else {
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
            data={nowMovies}
            renderItem={({item}) => <SliderItem data={item} />}
            keyExtractor={(item) => String(item.id)}
          />

          <Title>Populares</Title>
          <SliderMovies
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={popularMovies}
            renderItem={({item}) => <SliderItem data={item} />}
            keyExtractor={(item) => String(item.id)}
          />

          <Title>Mais votados</Title>
          <SliderMovies
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={topMovies}
            renderItem={({item}) => <SliderItem data={item} />}
            keyExtractor={(item) => String(item.id)}
          />
        </ScrollView>
      </HomeContainer>
    )
  }
}

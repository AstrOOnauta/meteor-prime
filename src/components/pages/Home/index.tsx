import React, {useState, useEffect} from 'react'
import {ScrollView, ActivityIndicator} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {Banner, BannerButton, HomeContainer, SliderMovies, Title} from './style'
import Header from '../../uis/Header'
import SearchBar from '../../uis/SearchBar'
import SliderItem from '../../uis/SliderItem'
import api, {imageURL, key} from '../../../services/api'
import {MoviesResults} from '../../../types/movies'

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true)
  const [bannerMovie, setBannerMovie] = useState<number>(0)
  const [nowMovies, setNowMovies] = useState<MoviesResults | []>([])
  const [popularMovies, setPopularMovies] = useState<MoviesResults | []>([])
  const [topMovies, setTopMovies] = useState<MoviesResults | []>([])

  const navigation = useNavigation()

  async function getNowMovies() {
    await api
      .get('/movie/now_playing', {
        params: {
          api_key: key,
        },
      })
      .then((response) => {
        setNowMovies(response.data.results)
      })
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
      .then((response) => {
        setTopMovies(response.data.results)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }

  function handleMovie(item) {
    navigation.navigate('Detail', {id: item.id})
  }

  useEffect(() => {
    let isActive: boolean = true

    const interval = setInterval(() => {
      setBannerMovie(Math.floor(Math.random() * 19))
    }, 5000)

    if (isActive) {
      getNowMovies()
      getPopularMovies()
      getTopMovies()
    }

    return () => {
      isActive = false
      clearInterval(interval)
      new AbortController().abort()
    }
  }, [])

  if (loading) {
    return (
      <HomeContainer>
        <ActivityIndicator size="large" color="#FBB034" />
      </HomeContainer>
    )
  } else {
    return (
      <HomeContainer>
        <Header />
        <SearchBar />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title>Now playing</Title>
          <BannerButton
            activeOpacity={0.8}
            onPress={() => handleMovie(nowMovies[bannerMovie])}
          >
            <Banner
              resizeMethod="resize"
              source={{
                uri: `${imageURL}${nowMovies[bannerMovie].backdrop_path}`,
              }}
            />
          </BannerButton>
          <SliderMovies
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={nowMovies}
            renderItem={({item}) => (
              <SliderItem data={item} handleMovie={() => handleMovie(item)} />
            )}
            keyExtractor={(item) => String(item.id)}
          />

          <Title>Popular</Title>
          <SliderMovies
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={popularMovies}
            renderItem={({item}) => (
              <SliderItem data={item} handleMovie={() => handleMovie(item)} />
            )}
            keyExtractor={(item) => String(item.id)}
          />

          <Title>Top rated</Title>
          <SliderMovies
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={topMovies}
            renderItem={({item}) => (
              <SliderItem data={item} handleMovie={() => handleMovie(item)} />
            )}
            keyExtractor={(item) => String(item.id)}
          />
        </ScrollView>
      </HomeContainer>
    )
  }
}

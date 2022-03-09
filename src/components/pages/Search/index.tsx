import {useNavigation, useRoute} from '@react-navigation/native'
import React, {useEffect, useState} from 'react'
import {ActivityIndicator, Text, View} from 'react-native'
import {MoviesResults} from '../../../types/movies'
import api, {imageURL, key} from '../../../services/api'
import {
  Banner,
  MovieContainer,
  MoviesList,
  RateContainer,
  RateText,
  SearchContainer,
  Title,
} from './style'
import {Ionicons} from '@expo/vector-icons'

export default function Search() {
  const [movies, setMovies] = useState<MoviesResults[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const navigation = useNavigation()
  const route = useRoute()

  async function getSearchMovie() {
    await api
      .get('/search/movie', {
        params: {
          api_key: key,
          query: route?.params?.name,
        },
      })
      .then((response) => {
        setMovies(response.data.results)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    let isActive: boolean = true

    if (isActive) {
      getSearchMovie()
    }

    return () => {
      isActive = false
    }
  }, [])

  if (loading) {
    return <ActivityIndicator size="large" color="#FBB034" />
  } else if (movies.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#303030',
        }}
      >
        <Text style={{color: '#FFF', fontSize: 100, fontWeight: 'bold'}}>
          404
        </Text>
        <Text style={{color: '#FFF', fontSize: 32, fontWeight: 'bold'}}>
          Movie not found...
        </Text>
      </View>
    )
  } else {
    return (
      <SearchContainer>
        <MoviesList
          data={movies}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <MovieContainer
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Detail', {id: item.id})}
            >
              <Banner
                resizeMethod="resize"
                source={
                  item.poster_path === null
                    ? {
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png',
                      }
                    : {uri: `${imageURL}${item.poster_path}`}
                }
              />
              <Title numberOfLines={1}>{item.title}</Title>
              <RateContainer>
                <Ionicons name="md-star" size={18} color="#FFCD3C" />
                <RateText>{item.vote_average}/10</RateText>
              </RateContainer>
            </MovieContainer>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </SearchContainer>
    )
  }
}

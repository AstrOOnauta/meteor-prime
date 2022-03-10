import React, {useEffect, useState} from 'react'
import {View, Text} from 'react-native'
import {useNavigation, useIsFocused} from '@react-navigation/native'

import {getMoviesSave} from '../../../utils/storage'
import Header from '../../../components/uis/Header'
import {Avatar, MovieList, MoviesContainer, MoviesList} from './style'
import {MovieDetail} from '../../../types/movieDetail'
import {imageURL} from '../../../services/api'
import {Ionicons} from '@expo/vector-icons'

export default function Movies() {
  const [myMovies, setMyMovies] = useState<MovieDetail | []>([])

  const navigation = useNavigation()
  const isFocused = useIsFocused()

  async function getMyMovies() {
    setMyMovies(await getMoviesSave())
  }

  useEffect(() => {
    let isActive: boolean = true

    if (isActive) {
      getMyMovies()
    }

    return () => {
      isActive = false
      new AbortController().abort()
    }
  }, [isFocused])

  return (
    <MoviesContainer>
      <Header title={'My movies'} />
      <MoviesList
        showsVerticalScrollIndicator={false}
        data={myMovies}
        renderItem={({item}) => (
          <MovieList
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Detail', {id: item.id})}
          >
            <Avatar
              resizeMethod="resize"
              source={{uri: `${imageURL}${item.poster_path}`}}
            />
            <View>
              <Text
                style={{
                  color: '#fbb034',
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginBottom: 8,
                }}
              >
                {item.title}
              </Text>
              <View
                style={{flexDirection: 'row', marginTop: 8, marginBottom: 16}}
              >
                <Ionicons name="md-star" size={16} color="#FFCD3C" />
                <Text
                  style={{
                    color: '#FFF',
                    marginLeft: 8,
                  }}
                >
                  {item.vote_average}/10
                </Text>
              </View>
            </View>
          </MovieList>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </MoviesContainer>
  )
}

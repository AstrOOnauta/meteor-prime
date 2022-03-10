import React, {useEffect, useState} from 'react'
import {Feather, Ionicons} from '@expo/vector-icons'
import {useNavigation, useRoute} from '@react-navigation/native'
import Stars from 'react-native-stars'

import {
  Banner,
  ButtonLink,
  Description,
  DetailContainer,
  Header,
  HeaderButton,
  ListGenres,
  Rate,
  StarsContainer,
  Title,
} from './style'
import api, {imageURL, key} from '../../../services/api'
import {MovieDetail} from 'types/movieDetail'
import {ActivityIndicator, ScrollView, Modal} from 'react-native'
import Genre from '../../../components/uis/Genre'
import ModalLink from '../../../components/uis/ModalLink'
import {hasMovie, saveMovie} from '../../../utils/storage'

export default function Detail() {
  const [loading, setLoading] = useState<boolean>(true)
  const [movie, setMovie] = useState<MovieDetail | undefined>(undefined)
  const [openLink, setOpenLink] = useState<boolean>(false)
  const [isMyMovie, setIsMyMovie] = useState<boolean>(false)

  const route = useRoute()
  const navigation = useNavigation()

  async function getMovie() {
    await api
      .get(`/movie/${route.params?.id}`, {
        params: {
          api_key: key,
        },
      })
      .then((response) => {
        setMovie(response.data)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }

  async function getIsMyMovie() {
    if (movie !== undefined) {
      setIsMyMovie(await hasMovie(movie))
    }
  }

  useEffect(() => {
    let isActive: boolean = true

    if (isActive) {
      getMovie()
    }

    return () => {
      isActive = false
      new AbortController().abort()
    }
  }, [])

  useEffect(() => {
    getIsMyMovie()
  }, [movie])

  if (loading || movie === undefined) {
    return (
      <DetailContainer>
        <ActivityIndicator size="large" color="#FBB034" />
      </DetailContainer>
    )
  } else {
    return (
      <DetailContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header>
            <HeaderButton
              activeOpacity={0.8}
              onPress={() => {
                navigation.goBack()
              }}
            >
              <Feather name="arrow-left" size={28} color="#fbb034" />
            </HeaderButton>
            <HeaderButton
              activeOpacity={0.8}
              onPress={async () => {
                await saveMovie(movie)
                getIsMyMovie()
              }}
            >
              <Ionicons
                name={isMyMovie ? 'bookmark' : 'bookmark-outline'}
                size={28}
                color="#fbb034"
              />
            </HeaderButton>
          </Header>
          <Banner
            resizeMethod="resize"
            source={{uri: `${imageURL}${movie.poster_path}`}}
          />
          <ButtonLink
            activeOpacity={0.8}
            onPress={() => setOpenLink(!openLink)}
          >
            <Feather name="link" size={28} color="#FFF" />
          </ButtonLink>
          <Title numberOfLines={2}>{movie.title}</Title>
          <StarsContainer>
            <Stars
              default={movie.vote_average}
              count={10}
              half={true}
              starSize={20}
              fullStar={<Ionicons name="md-star" size={24} color="#FFCD3C" />}
              emptyStar={
                <Ionicons name="md-star-outline" size={24} color="#FFCD3C" />
              }
              halfStar={
                <Ionicons name="md-star-half" size={24} color="#FFCD3C" />
              }
              disable={true}
            />
            <Rate>{movie.vote_average}/10</Rate>
          </StarsContainer>
          <ListGenres
            data={movie?.genres}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <Genre data={item} />}
          />
          <Title>Description</Title>
          <Description>{movie.overview}</Description>
          <Modal
            animationType="slide"
            transparent={true}
            visible={openLink === true}
          >
            <ModalLink
              link={movie.homepage}
              title={movie.title}
              closeModal={setOpenLink}
            />
          </Modal>
        </ScrollView>
      </DetailContainer>
    )
  }
}

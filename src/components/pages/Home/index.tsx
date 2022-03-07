import React from 'react'
import {Text} from 'react-native'

import {HomeContainer} from './style'
import Header from '../../uis/Header'
import SearchBar from '../../uis/SearchBar'

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <SearchBar />
      <Text>Home</Text>
    </HomeContainer>
  )
}

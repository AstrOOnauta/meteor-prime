import React, {useState} from 'react'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import {Input, SearchBarContainer, SearchButton} from './style'

export default function SearchBar() {
  const [search, setSearch] = useState<String>('')

  const navigation = useNavigation()

  function submitSearch() {
    if (search !== '') {
      navigation.navigate('Search', {name: search})
      setSearch('')
    }
  }

  return (
    <SearchBarContainer>
      <Input
        placeholder="Ex.: Lord of the Rings"
        placeholderTextColor="#DDD"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <SearchButton onPress={() => submitSearch()}>
        <Feather name="search" size={32} color="#fbb034" />
      </SearchButton>
    </SearchBarContainer>
  )
}

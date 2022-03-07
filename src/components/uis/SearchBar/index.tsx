import React from 'react'
import {Feather} from '@expo/vector-icons'

import {Input, SearchBarContainer, SearchButton} from './style'

export default function SearchBar() {
  return (
    <SearchBarContainer>
      <Input placeholder="Ex.: Senhor dos anéis" placeholderTextColor="#DDD" />
      <SearchButton>
        <Feather name="search" size={32} color="#fbb034" />
      </SearchButton>
    </SearchBarContainer>
  )
}

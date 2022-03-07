import React from 'react'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import {HeaderContainer, MenuButton, Title} from './style'

export default function Header() {
  const navigation = useNavigation()

  return (
    <HeaderContainer>
      <MenuButton onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={36} color="#fbb034" />
      </MenuButton>
      <Title>Meteor Prime</Title>
    </HeaderContainer>
  )
}

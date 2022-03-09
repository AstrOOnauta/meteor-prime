import {Feather} from '@expo/vector-icons'
import React, {Dispatch, SetStateAction} from 'react'
import {Text} from 'react-native'
import {WebView} from 'react-native-webview'

import {BackButton, Name} from './style'

export interface ModalLinkProps {
  link: string | null
  title: string
  closeModal: Dispatch<SetStateAction<boolean>>
}

export default function ModalLink(props: ModalLinkProps) {
  return (
    <>
      <BackButton onPress={() => props.closeModal(false)}>
        <Feather name="x" size={34} color="#FFCD3C" />
        <Name numberOfLines={1}>{props.title}</Name>
      </BackButton>
      {props.link === null ? (
        <Text>This movie not has homepage...</Text>
      ) : (
        <WebView source={{uri: props.link}} />
      )}
    </>
  )
}

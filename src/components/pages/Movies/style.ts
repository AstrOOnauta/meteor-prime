import styled from 'styled-components/native'

export const MoviesContainer = styled.View`
  flex: 1;
  background-color: #303030;
`

export const MoviesList = styled.FlatList``

export const MovieList = styled.TouchableOpacity`
  height: 100px;
  margin: 8px 14px;
  border-radius: 4px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  background-color: rgba(0, 0, 0, 0.6);
  flex-direction: row;
  align-items: center;
`

export const Avatar = styled.Image`
  width: 85px;
  height: 85px;
  margin: 4px 16px 4px 8px;
  border-radius: 50px;
`

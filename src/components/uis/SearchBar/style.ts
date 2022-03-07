import styled from 'styled-components/native'

export const SearchBarContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 14px;
  margin: 8px 0;
`

export const Input = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.4);
  width: 85%;
  height: 45px;
  border-radius: 100px;
  padding: 5px 16px;
  color: #fff;
`

export const SearchButton = styled.TouchableOpacity`
  margin-left: 4%;
`

import styled from 'styled-components/native'

export const DetailContainer = styled.View`
  flex: 1;
  background-color: #303030;
`

export const Header = styled.View`
  z-index: 2;
  position: absolute;
  top: 35px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 14px;
`

export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 24px;
  justify-content: center;
  align-items: center;
`

export const Banner = styled.Image`
  width: 100%;
  height: 350px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
`

export const ButtonLink = styled.TouchableOpacity`
  background-color: #fbb034;
  border-radius: 50px;
  width: 65px;
  height: 65px;
  position: absolute;
  right: 14px;
  top: 40%;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

export const Title = styled.Text`
  color: #fbb034;
  font-size: 24px;
  font-weight: bold;
  margin: 0 14px;
  padding-top: 24px;
`

export const StarsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 14px;
`

export const Rate = styled.Text`
  color: #fbb034;
  font-size: 24px;
  font-weight: bold;
`

export const ListGenres = styled.FlatList`
  padding-left: 14px;
  margin: 8px 0;
  max-height: 30px;
`

export const Description = styled.Text`
  color: #fff;
  margin: 8px 14px;
  line-height: 20px;
`

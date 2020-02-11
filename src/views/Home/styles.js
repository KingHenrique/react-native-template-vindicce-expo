import styled from 'styled-components/native'
import LOGO from '../../../assets/logoOrange.png'

const Container = styled.View`
  flex: 1;
  background: #fff;
`
const Logo = styled.View`
  margin-top: 100px;
  align-content: center;
`
const Image = styled.Image.attrs({
  resizeMode: 'contain',
  source: LOGO
})`
  width: 100%;
  height: 60px;
`
const Informations = styled.View`
  flex: 1;
  margin-top: 100px;
  padding: 20px;
`
const InfoTitle = styled.Text`
  font-family: Avenir;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
  color: #777;
`
const InfoTitleBold = styled.Text`
  font-family: Avenir;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
  color: #000;
`
const Info = styled.Text`
  font-family: Avenir;
  text-align: left;
  margin-bottom: 8px;
  color: #777;
`

export { Container, Image, Informations, Info, Logo, InfoTitle, InfoTitleBold }

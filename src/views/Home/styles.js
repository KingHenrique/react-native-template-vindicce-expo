import styled from 'styled-components/native'
import LOGO from '../../../assets/logoOrange.png'

const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  margin-top: 100px;
`
const Image = styled.Image.attrs({
  resizeMode: 'contain',
  source: LOGO
})`
  width: 100%;
  height: 60px;
`
export { Container, Image }

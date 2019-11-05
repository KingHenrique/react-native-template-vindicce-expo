import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background: #f37321;
  align-items: center;
  justify-content: center;
`
const Image = styled.Image.attrs({
  resizeMode: 'contain',
  source: {
    uri:
      'https://user-images.githubusercontent.com/22872282/59152673-45bacc80-8a1f-11e9-9ca4-9050c446a17a.png'
  }
})`
  width: 100%;
  height: 60px;
`
export { Container, Image }

import styled from 'styled-components/native'
import { Platform } from 'react-native'

const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
  enabled: true,
})`
  flex: 1;
`

const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
  },
})`
  flex: 1;
`

export { KeyboardAvoidingView, Container }

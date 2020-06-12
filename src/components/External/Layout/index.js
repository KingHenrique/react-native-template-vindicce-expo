import React from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function Container({ data, children }) {
  return (
    <C.KeyboardAvoidingView>
      <C.Container>{children}</C.Container>
    </C.KeyboardAvoidingView>
  )
}

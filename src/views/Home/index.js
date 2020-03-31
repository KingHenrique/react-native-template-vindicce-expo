import React, { useState, useEffect } from 'react'
import * as C from './styles'
import { actions } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

export default function Home() {
  const dispatch = useDispatch()
  const example = useSelector(state => {})

  useEffect(() => {
    // componentDidMount
    return () => {
      //component willUnmount
    }
  }, [])

  return (
    <C.Container>
      <C.Logo>
        <C.Image />
      </C.Logo>
      <C.Informations>
        <C.InfoTitle>
          <C.InfoTitleBold>yarn g</C.InfoTitleBold>, para gerar componentes
        </C.InfoTitle>
        <C.Info>
          • View, to create Views(Container's), with or without redux, in the
          class or function pattern.
        </C.Info>
        <C.Info>
          • Function View, to create a function Views, with or without redux,
          using hooks.
        </C.Info>
        <C.Info>
          • Components, for the creation of components, in the class or function
          pattern.
        </C.Info>
        <C.Info>• Redux, to create a new Redux/Actions/Sagas.</C.Info>
        <C.Info>
          • Flow, to create a new application flow, already as a standard view,
          with or without redux, using hooks.
        </C.Info>
      </C.Informations>
    </C.Container>
  )
}

Home.navigationOptions = {
  header: null,
}

Home.defaultProps = {}

Home.propTypes = {}

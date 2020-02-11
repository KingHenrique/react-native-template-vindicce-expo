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
        <C.Info>• View, para gerar um container com ou sem redux.</C.Info>
        <C.Info>
          • Function View, para gerar um container com ou sem redux, usando o
          novo padrão de hooks.
        </C.Info>
        <C.Info>
          • Components, para gerar componentes de uso compartilhado.
        </C.Info>
        <C.Info>
          • Redux, para a crição de um redux, com actions e sagas.
        </C.Info>
        <C.Info>
          • Flow, para a criação de um novo flow, utilizando o stackNavigation.
        </C.Info>
      </C.Informations>
    </C.Container>
  )
}

Home.navigationOptions = {
  header: null
}

Home.defaultProps = {}

Home.propTypes = {}

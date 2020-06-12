import React, { useState, useEffect } from 'react'
import * as C from './styles'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

export default function Home({ data }) {
  const dispatch = useDispatch()
  const example = useSelector((state) => {})

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
          <C.InfoTitleBold>{data.TEXT1}</C.InfoTitleBold>
          {data.TEXT2}
        </C.InfoTitle>
        <C.Info>{data.TEXT3}</C.Info>
        <C.Info>{data.TEXT4}</C.Info>
        <C.Info>{data.TEXT5}</C.Info>
        <C.Info>{data.TEXT6}</C.Info>
      </C.Informations>
    </C.Container>
  )
}

Home.navigationOptions = {
  header: null,
}

Home.defaultProps = {}

Home.propTypes = {}

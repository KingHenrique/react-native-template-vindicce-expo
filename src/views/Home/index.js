import React, { useState, useEffect } from 'react'
import * as C from './styles'
import { actions } from '../../redux/actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Home() {
  return (
    <C.Container>
      <C.Image />
    </C.Container>
  )
}

Home.navigationOptions = {
  header: null
}

Home.defaultProps = {}

Home.propTypes = {}

const mapStateToProps = state => {
  return {
    initial: []
  }
}

export default connect(mapStateToProps)(Home)

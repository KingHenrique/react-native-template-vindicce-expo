import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import data from './data'
import Layout from './Layout'
import PropTypes from 'prop-types'

export default function Container(props) {
  const dispatch = useDispatch();
  const example = useSelector(state => {});

  useEffect(() => {
    // componentDidMount
    return () => {
      //component willUnmount
    };
  }, []);

  return <Layout {...props} data={data} />
}

Container.navigationOptions = {
  header: null
}

Container.defaultProps = {

}

Container.propTypes = {

}
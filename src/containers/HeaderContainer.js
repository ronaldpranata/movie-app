import React from 'react'
import Header from '../components/Header'
import PropTypes from 'prop-types'

const HeaderContainer = (props) => (
  <div>
    <Header title={props.title} type={"main"} />
    <Header title={props.subTitle} type={"sub"} />
  </div>
)

export default HeaderContainer



HeaderContainer.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
  }
  
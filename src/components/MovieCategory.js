import React from 'react'
import PropTypes from 'prop-types'


const MovieCategory= ({ picture, title}) => (
  <a style={{backgroundColor:'#000', color:'#fff',marginRight:20 }} href={'/'+title} key={title}>
      {title}
  </a>
)

MovieCategory.propTypes = {
  title: PropTypes.string
}

export default MovieCategory

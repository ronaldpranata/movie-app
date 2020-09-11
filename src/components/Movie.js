import React from 'react'
import PropTypes from 'prop-types'

const Movie= ({ picture, title}) => (
  <div>
      {picture}<br/>
      {title}
  </div>
)

Movie.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string
}

export default Movie

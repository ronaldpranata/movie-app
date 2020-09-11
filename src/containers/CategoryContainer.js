import React from 'react'
import MovieCategory from '../components/MovieCategory'
import PropTypes from 'prop-types'
import _ from 'lodash';

const MovieCategoryContainer = (props) => (
  <div>
     {
         _.map(props.categories, (cat)=>{
            return  <MovieCategory title={cat} />
         })
     } 
  </div>
)

export default MovieCategoryContainer



MovieCategoryContainer.propTypes = {
    categories: PropTypes.array
  }
  
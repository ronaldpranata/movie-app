import { combineReducers } from 'redux'

import movies from './movies'
import _ from 'lodash';

export default combineReducers({
  movies
})




export const getMovieByCategory = (state,category)=>{
    return _.filter(state.movies,(o)=>{
        return o.programType===category
    })
}



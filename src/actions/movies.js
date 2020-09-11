import movieapi from '../api/movieapi'
import * as types from '../constants/ActionTypes'

const receiveMovies = movies => ({
  type: types.RECEIVE_ALL_MOVIES,
  movies
})


export const getAllData = () => dispatch => {
  movieapi.getMovies(movies => {
    dispatch(receiveMovies(movies))

  })
}

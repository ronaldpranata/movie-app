import {
  RECEIVE_ALL_MOVIES,
  GET_CATEGORIES
} from "../constants/ActionTypes";
import _ from 'lodash';

function reducer(state = null, action) {
  //console.log(action);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_MOVIES:
      nextState.movies = action.movies;
      nextState.categories =  _.uniq(_.map(action.movies.entries, 'programType')) ;
      return nextState;
    

    default:
  }
  return state;
}


export default reducer;

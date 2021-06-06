import categoriesData from '../data';
import SELECT_MOVIE from '../actions/index';

const INITIAL_STATE = {
  selectedMovie: {},
  selectedCategory: {},
  categories: categoriesData
}

export default function movieReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
  case SELECT_MOVIE:
    return {
      ...state,
      selectedMovie: action.payload.selectedMovie,
      selectedCategory: action.payload.selectedCategory,
    };
  default:
    return state;
  }
}

import SELECT_MOVIE from './index';

export default function selectMovie(selectedMovie, selectedCategory) {
  return {
    type: SELECT_MOVIE,
    payload: {
      selectedMovie,
      selectedCategory,
    }
  }
}
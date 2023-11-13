const defaultState = {
  movies: [],
  detailMovie: {}
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {...state,  movies: action.payload.movies}
    case 'SET_DETAIL_MOVIE':
      return {...state,  detailMovie: action.payload.detailMovie}
    default:
      return state
  }
}

export default reducer
const defaultState = {
  movies: [],
  totalData: 0,
  detailMovie: {}
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {...state,  movies: action.payload.movies, totalData: action.payload.totalData}
    case 'SET_DETAIL_MOVIE':
      return {...state,  detailMovie: action.payload.detailMovie}
    default:
      return state
  }
}

export default reducer
const defaultState = {
  movies: [],
  totalData: 0,
  detailMovie: {},
  orders: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {...state,  movies: action.payload.movies, totalData: action.payload.totalData}
    case 'SET_DETAIL_MOVIE':
      return {...state,  detailMovie: action.payload.detailMovie}
    case 'SET_ORDERS':
      return {...state, orders: action.payload.orders}
    case 'ADD_ORDER':
      let ordersTempAdd = state.orders.map(item => {
        if (item.imdbID === action.payload.imdbId) {
          return {...item, Count: item.Count + 1}
        }
        return item
      })
      return {...state, orders: ordersTempAdd}
    case 'REMOVE_ORDER':
      let ordersTempRemove = state.orders.map(item => {
        if (item.imdbID === action.payload.imdbId) {
          return {...item, Count: item.Count - 1}
        }
        return item
      })
      return {...state, orders: ordersTempRemove}
    case 'DELETE_ORDER':
      let ordersTempDelete = [...state.orders].filter(item => {
        return item.imdbID !== action.payload.imdbId
      })
      return {...state, orders: ordersTempDelete}
    default:
      return state
  }
}

export default reducer
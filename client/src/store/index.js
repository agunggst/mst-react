import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import movieReducer from './reducers/movieReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  movieReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
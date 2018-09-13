import { combineReducers } from 'redux'
import { searchTerm, searchLoading, selectedUser } from './features/Search/reducers'

// Initial state stuff
const initialState = {
  
}

const rootReducer = combineReducers({
  searchTerm,
  searchLoading,
  selectedUser,
  ...initialState
})

export default rootReducer
import { combineReducers } from 'redux'
import { searchTerm, searchLoading, selectedUser, selectedUserRepos } from './features/Search/reducers'

// Initial state stuff
const initialState = {
  
}

const rootReducer = combineReducers({
  searchTerm,
  searchLoading,
  selectedUser,
  selectedUserRepos,
  ...initialState
})

export default rootReducer
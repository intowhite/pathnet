import { combineReducers } from 'redux'
import { searchTerm, searchLoading, selectedUser, userRepos } from './features/Search/reducers'

const rootReducer = combineReducers({
  searchTerm,
  searchLoading,
  selectedUser,
  userRepos
})

export default rootReducer
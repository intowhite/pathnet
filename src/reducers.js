import { combineReducers } from 'redux'
import { searchTerm, searchLoading, selectedUser } from './features/Search/reducers'
import { userRepos } from './features/RepoList/reducers'

const rootReducer = combineReducers({
  searchTerm,
  searchLoading,
  selectedUser,
  userRepos
})

export default rootReducer
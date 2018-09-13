import { combineReducers } from 'redux'
import { searchTerm, searchLoading, selectedUser } from './features/Search/reducers'
import { userRepos, showRepos } from './features/RepoList/reducers'

const rootReducer = combineReducers({
  searchTerm,
  searchLoading,
  selectedUser,
  userRepos,
  showRepos
})

export default rootReducer
import { combineReducers } from 'redux'
import { searchTerm, selectedUser } from './features/Search/reducers'
import { userRepos, showRepos } from './features/RepoList/reducers'

const rootReducer = combineReducers({
  searchTerm,
  selectedUser,
  userRepos,
  showRepos
})

export default rootReducer
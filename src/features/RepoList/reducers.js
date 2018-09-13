export const userRepos = (state = [] , action) => {
  if(action.type === 'FETCH_REPOS_SUCCESS') {
    return action.repos
  }
  if(action.type === 'CLEAR_USER') {
    return []
  }
  return state
}
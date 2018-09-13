export const selectedUser = (state = null, action) => {
  if(action.type === 'SELECT_USER') {
    return action.user
  }
  if(action.type === 'CLEAR_USER') {
    return null
  }
  return state
}
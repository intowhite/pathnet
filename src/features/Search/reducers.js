export const searchTerm = (state = 'tests' , action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_TERM':
      return action.term
    default:
      return state
  }
}

export const selectedUser = (state = {} , action) => {
  if(action.type === 'FETCH_USERS_SUCCESS') {
    return action.value
  }
  if(action.type === 'CLEAR_USER') {
    return {
      name: null
    }
  }
  return state
}
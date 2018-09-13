
const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM'

export const updateSearchTerm = (value) => {
  console.log('updateSearchTerm',value)
  return dispatch => {
    dispatch({
      type: UPDATE_SEARCH_TERM,
      term: value
    })
    dispatch({
      type: 'SET_LOADING',
      loading: true
    })
    // Simulate some load time so I can show the loading animation bs
    setTimeout(
      () => {
        fetch('https://api.github.com/users/' + value)
          .then((r) => r.json())
          .then((r) => {
            dispatch({
              type: 'FETCH_USERS_SUCCESS',
              value: r
            })
            dispatch({
              type: 'SET_LOADING',
              loading: false
            })
        })
      },
      50
    )
  }
}

export const selectUser = (user) => {
  return {
    type: 'SELECT_USER',
    user
  }
}
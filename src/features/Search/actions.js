
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
    dispatch({
      type: 'CLEAR_USER'
    })
    // Simulate some load time so I can show the loading animation bs
    setTimeout(

      () => {
        fetch('https://api.github.com/users/' + value)
          .then(r => r.json())
          .then(r => {
            dispatch({
              type: 'FETCH_USERS_SUCCESS',
              value: r
            })
            dispatch({
              type: 'SET_LOADING',
              loading: false
            })

            //Fake loading repos lag...
            setTimeout(
              
              () => {
                fetch(r.repos_url)
                  .then(repos => repos.json())
                  .then(repos => {
                    dispatch({
                      type: 'FETCH_REPOS_SUCCESS',
                      repos: repos
                    })
                  })
              },
              500
            )
        })
      },
      500
    )
  }
}

export const selectUser = (user) => {
  return {
    type: 'SELECT_USER',
    user
  }
}
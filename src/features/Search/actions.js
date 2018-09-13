// action types should be imported references to string literals 

export const updateSearchTerm = (value) => {
  return dispatch => {
    dispatch({
      type: 'UPDATE_SEARCH_TERM',
      term: value
    })
    dispatch({
      type: 'CLEAR_USER'
    })
    dispatch({
      type: 'TOGGLE_REPOS',
      bool: false
    })
    fetch('https://api.github.com/users/' + value)
      .then(r => r.json())
      .then(r => {

        dispatch({
          type: 'FETCH_USERS_SUCCESS',
          value: r
        })

        fetch(r.repos_url + '?')
          .then(repos => {
            // horrible, just needed to make sure response was coming back from GH and not localhost
            if (repos.type === 'cors') {
              return repos.json();
            }
            return []
          })
          .then(repos => {
            dispatch({
              type: 'FETCH_REPOS_SUCCESS',
              repos: repos
            })
          })
          .then(() => {
            // delay to make a nice animation
            setTimeout(() => {
              dispatch({
                type: 'TOGGLE_REPOS',
                bool: true
              })
            }, 200)
          })
      })
  }
}
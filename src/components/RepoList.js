import React from 'react'
import { distanceInWordsStrict } from 'date-fns'

const RepoList = ({userRepos}) => {
  if (userRepos.length) {
    return (
      <div className="RepoList">
        Repolist
        {userRepos.map(repo => 
        {
          return (
            <div>
              {repo.description}
              {repo.forks}
              {distanceInWordsStrict(repo.created_at, new Date())}
              {repo.language}
            </div>
          )
        }
        )}
      </div>
    )
  } else {
    return null
  }
}

export default RepoList
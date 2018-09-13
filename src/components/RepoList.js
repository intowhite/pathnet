// animations could be implemented much better, esp using react's transition group addon

import React from 'react'
import { distanceInWordsStrict } from 'date-fns'

const RepoList = ({ userRepos, showRepos }) => {
  if (userRepos.length) {
    return (
      <div className="RepoList">
        <div className="RepoList-count">
          {userRepos.length} Repos:
          <div className="RepoList-countBar"></div>
        </div>
        <div className={(showRepos ? 'show-repos ' : ' ') + 'RepoList-repos'}>
          {userRepos.map((repo,id) => (
            <div className="RepoList-repo" key={repo.id} style={{transitionDelay: (id * .05 + 's')}}>
              <div className="RepoList-repoTitle">
                <div className="RepoList-repoName">
                  {repo.name}
                </div>
                <div className="RepoList-repoAge">
                  {distanceInWordsStrict(repo.created_at, new Date())} ago
                </div>
              </div>
              { repo.description &&
                <div className="RepoList-repoDescription">
                  {repo.description}
                </div>
              }
              { repo.language &&
                <div className="RepoList-repoLanguage">
                  <span>{repo.language}</span>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className="RepoList">
        <div className="RepoList-count">
          Search for a user to get started
          <div className="RepoList-countBar"></div>
        </div>
      </div>
    )
  }
}

export default RepoList


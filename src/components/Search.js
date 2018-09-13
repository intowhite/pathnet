import React from 'react'
import { selectUser } from '../features/Search/actions';

const Search = ({ searchTerm, updateSearchTerm, selectedUser }) => (
  <div className="Search">
    <div className="Search-form">
      Search
      <input value={searchTerm} onChange={(e) => updateSearchTerm(e.target.value)}></input>  
    </div>
    <div className="Search-user">
      <div className="Search-userLogin">
        <img src={selectedUser.avatar_url} alt=""/>
        {selectedUser.login}
      </div>
    </div>
  </div>
)

export default Search
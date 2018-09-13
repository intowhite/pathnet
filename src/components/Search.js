import React from 'react'

const Search = ({ searchTerm, updateSearchTerm, selectedUser }) => (

  <div className="Search">
    <form className="Search-form" onSubmit={(e) => {e.preventDefault(); updateSearchTerm(searchTerm)}}>
      <label htmlFor="">Username:</label>
      <input value={searchTerm} onChange={(e) => updateSearchTerm(e.target.value)}></input>  
      <div className="button" onClick={() => updateSearchTerm(searchTerm)}>Get It!</div>
    </form>
    {selectedUser.login &&
    <div className="Search-user">
      <div className="Search-userImage">
        <div style={{
          backgroundImage: 'url(' + selectedUser.avatar_url + ')'
        }}></div>
      </div>
      <div className="Search-userName">
        {selectedUser.login} <span>({selectedUser.name})</span>
      </div>
    </div>}
  </div>

)

export default Search
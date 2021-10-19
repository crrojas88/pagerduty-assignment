import React from 'react'

const SearchForm = ({ newSearch, handleSearch, submitSearch }) => {
    return(
        <form onSubmit={submitSearch}>
            <div>
                Search: <input name='search' value={newSearch} onChange={handleSearch}/>
            </div>
            <div>
                <button type="submit">Search</button>
            </div>
        </form>
    )

}

export default SearchForm
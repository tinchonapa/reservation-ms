import React from 'react';

const Search = ({searchfield, searchChange}) => {
    
    return (
        <div className="input-group">
            <label className="search-label" htmlFor="search-input">
                <input
                    type="search"
                    name="search"
                    id="search-input"
                    placeholder="Search..."
                    onChange={searchChange}
                    className="form-control bg-light border-0 small"
                />
            </label>
            <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                    <i className="fas fa-search fa-sm" />
                </button>
            </div>
            {/* this.renderSearchResults() */}
        </div>
    )
    
}

export default Search;
import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        }

        this.cancel = '';
    }

    fetchSearchResults ( updatePageNo = '', query ) {
        const pageNumber = updatePageNo ? `&page=${updatePageNo}` : '';
        const serachUrl = 'https://pixabay.com/api/?key=';

        if( this.cancel ) {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();
        axios.get( serachUrl, {
            CancelToken: this.cancel.token
        } )
    };

    render () {
        const {query} = this.state;
        return (
            <div className="input-group">
                <label className="search-label" htmlFor="search-input">
                    <input
                        type="text"
                        name="query"
                        value={ query }
                        id="search-input"
                        placeholder="Search..."
                        onChange={this.handleOnInputChange}
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
}

export default Search;
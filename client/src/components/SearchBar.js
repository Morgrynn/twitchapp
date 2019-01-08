import React from 'react';

const SearchBar = ({ onSearchBarChange, searchBarValue }) => {

    return ( 
        <div className="ui icon input">
            <input 
                className="center"
                type="text"
                value={searchBarValue}
                onChange={onSearchBarChange}
            />
            <i className="circular search link icon"></i>
        </div>
        );
    
}
 
export default SearchBar;
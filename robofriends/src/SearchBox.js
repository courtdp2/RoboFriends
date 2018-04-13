import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className='pa2 tc'>
            <input 
            className='bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5' 
            type="search" 
            placeholder="find a robot"
            onChange={searchChange} />
        </div>   
    )
}

export default SearchBox
import React from 'react'
import { MdSearch } from "react-icons/md";

const Search = (props) => {
    const { handleSearch } = props;
    
    return (
        <div className='search'>
            <MdSearch className='search-icon' />
            <input onChange={(e)=>handleSearch(e.target.value)} type="text" placeholder='Type to search...' />
        </div>
    )
}

export default Search;

import React from 'react'
import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
  return (
    <div>
        <div><FaSearch/></div>
        <div><input type='text' placehoder='Search gym name here...' /></div>
        <div></div>
        <div>Clear</div>
    </div>
  )
}

export default Searchbar
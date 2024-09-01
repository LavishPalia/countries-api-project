import React from 'react';

const SearchBar = ({ setQuery }) => {
  return (
    <div>
      <input
        type='text'
        placeholder='Search for a country'
        name='countries'
        id='countries'
        className='shadow-md py-2 px-8 rounded-md focus:border 
        focus:border-indigo-500 focus:outline-none placeholder:text-lg'
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

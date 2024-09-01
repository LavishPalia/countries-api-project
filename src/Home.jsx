import { useState } from 'react';
import CountriesList from './components/CountriesList';
import SearchBar from './components/SearchBar';
import SelectMenu from './components/SelectMenu';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <div className='flex justify-between items-center mt-8 px-16'>
        <SearchBar setQuery={setSearchTerm} />
        <SelectMenu />
      </div>

      <CountriesList query={searchTerm} />
    </>
  );
};

export default Home;

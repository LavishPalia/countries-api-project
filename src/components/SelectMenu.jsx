import React from 'react';

const SelectMenu = () => {
  return (
    <select className='py-2 px-8 shadow-md rounded-md focus:border focus:border-indigo-500 focus:outline-none'>
      <option hidden=''>Filter by Region</option>
      <option value='Asia'>Asia</option>
      <option value='America'>America</option>
      <option value='Africa'>Africa</option>
      <option value='Europe'>Europe</option>
      <option value='Oceania'>Oceania</option>
    </select>
  );
};

export default SelectMenu;

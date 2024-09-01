import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='py-4 px-16 flex justify-between items-center shadow-md'>
      <h1 className='text-3xl font-semibold tracking-wide'>
        <Link to='/'>Where in the world?</Link>
      </h1>

      <p className='text-xl font-medium'>Dark Mode</p>
    </div>
  );
};

export default Header;

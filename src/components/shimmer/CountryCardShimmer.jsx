import React from 'react';
import { Link } from 'react-router-dom';

const CountryCardShimmer = () => {
  return (
    <div className='flex flex-col space-y-4 rounded-lg w-72 bg-[#b0b4b481] animate-pulse transition-all h-[336px]'>
      <div className='h-48 bg-[#979b9b81] rounded-t-lg'></div>

      <div className='px-4 flex flex-col items-start justify-center pb-2 space-y-2'>
        <p className='h-6 w-44 bg-[#979b9b81] rounded-md'></p>
        <p className='h-4 w-32 bg-[#979b9b81] rounded-md'></p>
        <p className='h-4 w-36 bg-[#979b9b81] rounded-md'></p>
        <p className='h-4 w-56 bg-[#979b9b81] rounded-md'></p>
      </div>
    </div>
  );
};

export default CountryCardShimmer;

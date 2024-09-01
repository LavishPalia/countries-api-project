import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({
  name,
  population,
  region,
  capital,
  flagSrc,
  alt,
  data,
}) => {
  return (
    <Link
      to={`/${name}`}
      state={data}
      className='flex flex-col shadow-md space-y-4 rounded-lg w-72 bg-[#F5FEFD] hover:scale-105 delay-100'
    >
      <img
        src={flagSrc}
        alt={alt}
        className='size-48 object-center object-cover rounded-t-md w-full'
      />

      <div className='space-y-1 px-4 '>
        <h3 className='text-2xl font-black line-clamp-1'>{name}</h3>
        <div className='flex gap-2'>
          <p>Population:</p>
          <span className='font-bold'>
            {population.toLocaleString('en-IN')}
          </span>
        </div>
        <div className='flex gap-2'>
          <p>Region:</p>
          <span className='font-bold'>{region}</span>
        </div>
        <div className='flex gap-2 pb-4'>
          <p className=''>Capital:</p>
          <span className='font-bold line-clamp-1'>{capital}</span>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;

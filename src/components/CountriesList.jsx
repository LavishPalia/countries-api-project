import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import CountryCardShimmer from './shimmer/CountryCardShimmer';

const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchCountriesData = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();

      if (mounted) {
        setCountriesData(data);
      }
    };

    fetchCountriesData();

    return () => {
      mounted = false;
    };
  }, []);

  const filteredCountries = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredCountries.length === 0) {
    return (
      <div className='mt-16 px-16 flex gap-6 flex-wrap justify-between items-center'>
        {Array.from({ length: 20 }).map((_el, i) => {
          return <CountryCardShimmer key={i} />;
        })}
      </div>
    );
  }

  return (
    <div className='mt-16 px-16 flex gap-6 flex-wrap justify-between items-center'>
      {filteredCountries.map((country) => {
        return (
          <CountryCard
            key={country?.flag}
            name={country?.name?.common}
            population={country?.population}
            region={country?.region}
            capital={country?.capital}
            flagSrc={country?.flags?.svg}
            alt={country?.flags?.alt}
            data={country}
          />
        );
      })}
    </div>
  );
};

export default CountriesList;

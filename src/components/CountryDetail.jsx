import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import CountryDetailShimmer from './shimmer/CountryDetailShimmer';

const CountryDetail = () => {
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();
  const location = useLocation();

  console.log(location.state);

  const country = params.country;

  useEffect(() => {
    let mounted = true;

    setCountryData(null);
    setError(null);

    const updateStateData = async (data) => {
      const promiseArray = data.borders?.map(async (border) => {
        const borderCountriesResponse = await fetch(
          `https://restcountries.com/v3.1/alpha/${border}`
        );

        const [borderCountryData] = await borderCountriesResponse.json();
        return borderCountryData.name.common;
      });

      const borders = await Promise.all(promiseArray || []);

      setCountryData({
        flag: data.flags.svg,
        name: data.name.common,
        nativeName: Object.values(data.name.nativeName)[0].common,
        population: data.population,
        region: data.region,
        subregion: data.subregion,
        capital: data.capital.join(', '),
        language: Object.values(data.languages).join(', '),
        tld: data.tld,
        currencies: Object.values(data.currencies)
          .map((currency) => currency.name)
          .join(', '),
        borders: borders || [],
      });
    };

    if (location.state) {
      updateStateData(location.state);
      return;
    }

    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${country}?fullText=true`
        );

        if (!response.ok) {
          throw new Error(
            `Invalid country name "${country}". Please check the country name or return to the home page to try again.`
          );
        }

        const [data] = await response.json();

        if (mounted) {
          updateStateData(data);
        }
      } catch (error) {
        if (mounted) {
          setError(error.message);
        }
      }
    };

    fetchCountryData();

    return () => {
      mounted = false;
    };
  }, [country]);

  if (error) {
    return (
      <div className='text-center mt-16'>
        <h1 className='text-xl font-medium mb-4'>
          Something went wrong. Please read the below message to understand
          more.
        </h1>

        <p className='text-violet-600 text-3xl max-w-3xl mx-auto mt-0 mb-4'>
          {error}
        </p>
        <button
          className='shadow-md px-8 py-2 rounded-md font-semibold text-lg 
          hover:scale-105 delay-100 text-white bg-black'
          onClick={() => history.back()}
        >
          Go Back
        </button>
        <Link to='/'>
          <button
            className='bg-black py-2 px-8 text-white font-semibold rounded-md text-xl 
          hover:scale-105 delay-100 ml-4'
          >
            Return to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <button
        className='ml-16 mt-8 shadow-md px-8 py-2 rounded-md font-semibold text-lg 
        hover:scale-105 delay-100 bg-black text-white'
        onClick={() => history.back()}
      >
        Go Back
      </button>
      {countryData === null ? (
        <CountryDetailShimmer />
      ) : (
        <div className='mt-16 px-16 flex flex-col lg:flex-row justify-between gap-8'>
          <img
            src={countryData.flag}
            alt={countryData.name}
            className='min-w-96 max-w-12 rounded-lg object-cover object-center shadow-lg'
          />
          <div className='flex-1'>
            <h1 className='text-4xl font-bold'>{countryData.name}</h1>

            <section className='flex flex-col lg:flex-row justify-start items-center gap-16 mt-4'>
              {/* left */}
              <div className='font-semibold text-xl space-y-2'>
                <div className='flex gap-1'>
                  <p>Native Name:</p>
                  <p>{countryData.nativeName}</p>
                </div>
                <div className='flex gap-1'>
                  <p>Population:</p>
                  <p>{countryData.population.toLocaleString('en-IN')}</p>
                </div>
                <div className='flex gap-1'>
                  <p>Region:</p>
                  <p>{countryData.region}</p>
                </div>
                <div className='flex gap-1'>
                  <p>Sub Region:</p>
                  <h1 className=''>{countryData.subregion || 'N/A'}</h1>
                </div>
                <div className='flex gap-1 w-max'>
                  <p>Capital:</p>
                  <h1 className=''>{countryData.capital}</h1>
                </div>
              </div>

              {/* right */}
              <div className='font-semibold text-xl space-y-2 self-start max-w-xl'>
                <div className='flex gap-1'>
                  <p>Top level domain:</p>
                  <h1 className=''>{countryData.tld}</h1>
                </div>
                <div className='flex gap-1'>
                  <p>Currencies:</p>
                  <h1 className=''>{countryData.currencies}</h1>
                </div>
                <div className='flex gap-1 flex-wrap'>
                  <p>Languages:</p>
                  <p className=''>{countryData.language}</p>
                </div>
              </div>
            </section>

            {/* borders */}
            {countryData.borders.length !== 0 && (
              <div className='flex gap-2 flex-wrap items-center font-semibold mt-2'>
                <p className='text-xl'>Border Countries: </p>
                {countryData.borders.map((border, i) => (
                  <Link to={`/${border}`} key={border}>
                    <p
                      className='shadow-md py-1 px-4 rounded-md text-lg'
                      key={border}
                    >
                      {border}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CountryDetail;

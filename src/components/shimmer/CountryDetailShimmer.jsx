import React from 'react';

const CountryDetailShimmer = () => {
  return (
    <div className='mt-16 px-16 flex justify-between gap-8 animate-pulse transition-all'>
      <div className='h-80 w-96 rounded-lg shadow-lg bg-[#979b9b81]' />
      <div className='flex-1'>
        <p className='bg-[#979b9b81] h-8 mt-4 w-80 rounded-md'></p>

        <section className='flex justify-start items-center gap-16 mt-4 max-w-3xl'>
          {/* left */}
          <div className='space-y-2 bg-[#b0b4b481] px-4 py-4 rounded-md'>
            <p className='h-6 w-80 bg-[#979b9b81] rounded-md'></p>
            <p className='h-6 w-52 bg-[#979b9b81] rounded-md'></p>
            <p className='h-6 w-60 bg-[#979b9b81] rounded-md'></p>
            <p className='h-6 w-72 bg-[#979b9b81] rounded-md'></p>
            <p className='h-6 w-64 bg-[#979b9b81] rounded-md'></p>
          </div>

          {/* right */}
          <div className='space-y-4 self-start max-w-xl bg-[#b0b4b481] px-4 py-4 rounded-md'>
            <p className='h-6 w-64 bg-[#979b9b81] rounded-md' />
            <p className='h-6 w-72 bg-[#979b9b81] rounded-md' />
            <p className='h-6 w-56 bg-[#979b9b81] rounded-md' />
          </div>
        </section>

        {/* borders */}
        <div className='flex gap-2 flex-wrap items-center mt-4'>
          <p className='shadow-md py-1 px-4 rounded-md bg-[#979b9b81] h-10 w-20'></p>
          <p className='shadow-md py-1 px-4 rounded-md bg-[#979b9b81] h-10 w-20'></p>
          <p className='shadow-md py-1 px-4 rounded-md bg-[#979b9b81] h-10 w-20'></p>
          <p className='shadow-md py-1 px-4 rounded-md bg-[#979b9b81] h-10 w-20'></p>
          <p className='shadow-md py-1 px-4 rounded-md bg-[#979b9b81] h-10 w-20'></p>
          <p className='shadow-md py-1 px-4 rounded-md bg-[#979b9b81] h-10 w-20'></p>
          <p className='shadow-md py-1 px-4 rounded-md bg-[#979b9b81] h-10 w-20'></p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailShimmer;

import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='mt-16 flex flex-col justify-center items-center space-y-2'>
      <h1 className='text-xl'>Oops!</h1>
      <p className='text-4xl pb-4 tracking-wide'>It seems you are lost...</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
      <Link to='/'>
        <button className='bg-black py-2 px-8 text-white rounded-md text-xl'>
          Return to Home
        </button>
      </Link>
    </div>
  );
}

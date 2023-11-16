import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import backgroundImage from './images/back-school-concept-with-school-supplies.jpg';

const Aboutme = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <header className="">
        <Navbar />
      </header>
      <div className="flex-1 sm:w-full">
        <div className="px-4 py-5 sm:px-6 pt-32 text-black" style={{ fontSize: '1rem' }}>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Profile!</h2>
          <p className="mt-1 max-w-2xl text-md">
            I am a passionate individual dedicated to making a positive impact. Here are some details about me:
          </p>
        </div>
      </div>
      <div className="flex-1">
        <div className="border-t border-gray-200 bg-opacity-40 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-gray-900">
          <dl className="space-y-4">
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-base font-semibold leading-7 text-indigo-600" style={{ fontSize: '0.8rem' }}>Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" style={{ fontSize: '1rem' }}>
                Dimas Fariz Nugroho
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-base font-semibold leading-7 text-indigo-600" style={{ fontSize: '0.8rem' }}>
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" style={{ fontSize: '1rem' }}>
                fariz.dimans@gmail.com
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-base font-semibold leading-7 text-indigo-600" style={{ fontSize: '0.8rem' }}>Salary</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" style={{ fontSize: '1rem' }}>
                $10,000
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-base font-semibold leading-7 text-indigo-600" style={{ fontSize: '0.8rem' }}>About</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" style={{ fontSize: '1rem' }}>
                To get a social media testimonials, keep my customers engaged with my social media accounts by posting regularly myself.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <footer className='App-footer' class='h-0 block pt-32 pb-0' style={{ marginTop: '60px' }}>
        <Footer />
      </footer>
    </div>
  );
};

export default Aboutme;

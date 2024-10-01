import React, { useState } from 'react';
import './Home.css';
import Logo from '../assests/Group.png';
import Lock from '../assests/Lock.png';
import Wave from '../assests/Layer.png';
import Sales from '../assests/Sales.png';
import arrowLeft from '../assests/Left.png';
import arrowRight from '../assests/Right.png';
import Mouse from '../assests/Mouse.png';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='background bg-cover h-screen relative'>
      <nav className="text-white z-10 relative">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:py-4">
          <div className="flex justify-between h-16">
            <div className="flex flex-row items-center">
              <img src={Logo} alt='logo' />
              <a href="/" className="font-bold m-3">Pop Rock Crystal</a>
            </div>
            <div className="hidden md:flex space-x-7">
              <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#services" className="px-3 py-2 rounded-md text-sm font-medium">Shop</a>
              <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium">AboutUs</a>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium">Help</a>
              <img src={Lock} alt='Lock' className='w-full h-1/2 ml-8'/>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium">Shop</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium">About Us</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium">Help</a>
            <img src={Lock} alt='Lock' className='w-1/10 h-1/2 ml-4'/>
          </div>
        )}
      </nav>

      <div className='h-full flex justify-center'>
        <div className='w-1/2 flex flex-col items-start space-y-4 mt-36 ml-36'>
          <h2 className='text-white font-google-sans text-4xl font-semibold leading-[48px] mb-4'>
            Welcome to
          </h2>
          <h1 className='text-white font-google-sans text-6xl font-extrabold leading-[48px] mb-10'>
            Pop Rock Crystal Shop!
          </h1>
          <div className='w-4/5'>
            <p className='font-google-sans text-xl font-normal leading-[24px] text-[#215885] mb-6'>
              Here you will find unique phone accessories, crystals, jewelry, and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
            </p>
          </div>
          <div className='flex flex-row space-x-4'>
            <button className='bg-white text-[#215885] font-bold text-2xl p-4 border-0 rounded-lg'>
              Shop Now
            </button>
            <button className='text-[#215885] font-bold text-2xl p-4 border-0 rounded-lg'>
              About Us
            </button>
          </div>
        </div>

        <div className='w-1/2'>
          <div className='flex flex-col w-4/5 bg-white ml-14 mt-4 p-12 border-1 shadow-sm rounded-3xl items-center relative z-20'>
            <img src={Sales} alt='Sales' />
            <hr className='w-1/5 border-t-2 border-gray-300 my-4' />
            <h1 className='text-gray-600'>Crystal Agate Phone Grip <span className='text-[#215885] font-semibold'>- 18.99$</span></h1>
          </div>
        <div className='flex flex-row relative z-20 items-center justify-center mt-10'>
      <img
        src={arrowLeft}
        alt='left'
      />

      <div className='w-4 h-4 rounded-full bg-[#717ded] mx-4 flex items-center justify-center'></div>
      <div className='w-4 h-4 rounded-full bg-[#9da5f1] mx-4 flex items-center justify-center'></div>
      <div className='w-4 h-4 rounded-full bg-[#9da5f1] mx-4 flex items-center justify-center'></div>
      <div className='w-4 h-4 rounded-full bg-[#9da5f1] mx-4 flex items-center justify-center'></div>
      <div className='w-4 h-4 rounded-full bg-[#9da5f1] mx-4 flex items-center justify-center'></div>
      <div className='w-4 h-4 rounded-full bg-[#9da5f1] mx-4 flex items-center justify-center'></div>
      <div className='w-4 h-4 rounded-full bg-[#9da5f1] mx-4 flex items-center justify-center'></div>

      <img
        src={arrowRight}
        alt='right'
      />
    </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center absolute left-0 w-full z-10 bottom-0'>
         <img src={Mouse} alt="mouse"/>
         <h1 className='text-[hsla(197,65%,54%,1)] font-semibold ml-2 text-xl'>scroll down</h1>
      </div>
      
      <img src={Wave} alt='Waves' className="absolute bottom-0 left-0 w-full z-0 h-3/5 mt-28" />
    </div>
  );
}

export default Home;

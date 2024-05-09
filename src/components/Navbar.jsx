import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='text-4xl font-bold text-[#00df9a]'>BNLP.</h1>
      <ul className='hidden md:flex space-x-6 text-xl'>
        <li>Home</li>
        <li>Goal</li>
        <a href="#publications">Publications</a>
        <li>International Collaborations</li>
        <a href="#team">Meet with the Team!</a>
        <li>Latest in BLP</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 flex flex-col justify-center items-center' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='text-4xl font-bold text-[#00df9a] mb-8'>BNLP.</h1>
        <li className='py-4'>Home</li>
        <li className='py-4'>Goal</li>
        <li className='py-4'>Publications</li>
        <li className='py-4'>International Collaborations</li>
        <li className='py-4'>Meet with the Team!</li>
        <li className='py-4'>Latest in BLP</li>
      </ul>
    </div>
  );
};

export default Navbar;

import React from 'react';
import Logo from './img/logo.png'

const Header = () => {
  return (
  <div className='fixed w-screen z-50 p-6 px-16'>
    {/*desktop & tablet */}
    <div className="hidden md:flex w-full h-full">
        <div className="flex items-center gap-2">
            <img src={Logo} className="w-10 object-cover" alt="Logo" />

        </div>
    </div>
  
     {/* mobile*/}
     <div className='block md:hidden w-full h-full p-4
     '></div>

  </div>
  ); 
  
};

export default Header;

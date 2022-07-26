import React from 'react';

const Header = () => {
  return (
  <div className='fixed w-screen z-50 bg-slate-300 p-6 px-16'>
    {/*desktop & tablet */}
    <div className="hidden md:flex w-full h-full bg-red-600 p-4"></div>
  
     {/* mobile*/}
     <div className='block md:hidden w-full h-full bg-blue-600 p-4
     '></div>

  </div>
  );
  
};

export default Header;

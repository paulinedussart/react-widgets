import React from 'react';
import Link from './Link';
const Header = () => {
  return (
    <div>
      <div style={{ marginBottom: '20px' }} className='ui pointing secondary menu'>
        <Link href='/' className=' item'>
          Accordion
        </Link>
        <Link href='/list' className='item'>
          List
        </Link>
        <Link href='/dropdown' className='item'>
          Dropdown
        </Link>
        <Link href='/translate' className='item'>
          Translate
        </Link>
      </div>
    </div>
  );
};

export default Header;

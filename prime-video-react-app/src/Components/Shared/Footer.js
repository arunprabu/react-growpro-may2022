// Functional Components with Anonymous Fn

import React from 'react';
import Menu from './Menu';

const Footer = function(){

  const copyrightYear = 2022;

  return(
    <footer className='text-center'>
      <hr />
      <Menu />
      <p>Copyright { copyrightYear } | Arun</p>
    </footer>
  )
}

export default Footer;
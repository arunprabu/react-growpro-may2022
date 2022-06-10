// Functional Components with Named Fn 

import React from 'react';
import { useCartState } from '../../Hooks/useCartState';
import Menu from './Menu';

function Header() {

  // in this line <CartContext.Provider value={ cartData }> 
  // cartData is passed as obj. so we can expect the same here as returned obj from custom hook
  const { cartState } = useCartState();
  console.log(cartState);

  const appName = "Prime Video App";

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{appName}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <Menu />
          </div>
          <button type='button' className='btn btn-danger'>Cart ({cartState.length})</button>
        </div>
      </nav>
    </header>
  )
}

export default Header;
// Functional Components with Arrow Fn 
import React from 'react';

const Menu = () => {
  return(
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">HOC Demo</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Unit Testing Demo</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Todo App and more (Hooks)</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Products</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Login</a>
      </li>
    </ul>
  )
}

export default Menu;

// Functional Components with Arrow Fn 
import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return(
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/hoc-demo">HOC Demo</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/unit-testing">Unit Testing Demo</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/hooks">Todo App and more (Hooks)</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/context">Products(Context API)</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/styled-comp">Support(Styled Comp)</NavLink>
      </li>
    </ul>
  )
}

export default Menu;

import React, { useContext } from 'react'
import { PageContext } from '../../Contexts/PageContext'
import Products from './Products'

const ContextDemo = () => {
  // Step3 of useContext()
  // receive data from App Comp 

  const context = useContext(PageContext);
  console.log(context);

  return (
    <div>
      <h1>Context API Demo | Any to Any Comp Communication</h1>
      <p>Data received from PageContext</p>
      <p>{context.isLoggedIn? 'User has logged in': 'No! Not logged in'}</p>
      <p>Last Login: {context.lastLogin}</p>

      <Products />
    </div>
  )
}

export default ContextDemo
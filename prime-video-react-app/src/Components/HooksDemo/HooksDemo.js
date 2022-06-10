import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { PageContext } from '../../Contexts/PageContext'
import Blog from './Blog'
import MyAccount from './MyAccount'
import Todo from './Todo'

const HooksDemo = () => {

  // Step3 of useContext()
  // receive data from App Comp 
  const context = useContext(PageContext);
  console.log(context);

  return (
    <div>
      <h1>HooksDemo</h1>

      <nav>
        <Link to="blog">Blog</Link>
      </nav>

      <Outlet /> { /* router outlet from react-router-dom */ }
      <hr />

      <MyAccount />
      <hr/>

      

      <Todo />
      <hr/>

      <h2>AuthInfo | useContext() Demo</h2>
      <p>Data received from PageContext</p>
      <p>{context.isLoggedIn? 'User has logged in': 'No! Not logged in'}</p>
      <p>Last Login: {context.lastLogin}</p>

      

     

    </div>
  )
}

export default HooksDemo
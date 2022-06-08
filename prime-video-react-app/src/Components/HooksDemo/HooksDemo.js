import React from 'react'
import Blog from './Blog'
import MyAccount from './MyAccount'
import Todo from './Todo'

const HooksDemo = () => {
  return (
    <div>
      <h1>HooksDemo</h1>
      
      <MyAccount />
      <hr/>

      <Blog/>
      <hr/>

      <Todo />
    </div>
  )
}

export default HooksDemo
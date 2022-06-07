import React, { useState } from 'react'

const MyAccount = () => {

  console.log('Program Started');
  const [ accountName, setAccountName  ] = useState('john');
  
  const handleChangeName = () => {
    console.log('Inside handleChangeName');
    setAccountName('Steve');
  }

  console.log('Before Return');

  return (
    <div>
      <h2>MyAccount | useState() Demo</h2>
      <p>Account Name: {accountName}</p>
      <button onClick={handleChangeName}>Change Person Name</button>
    </div>
  )
}

export default MyAccount
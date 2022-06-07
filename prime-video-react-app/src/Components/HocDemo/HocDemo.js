import React from 'react'
import applyStyles from '../../Hoc/applyStyles'
import Hello from './Hello'
import HolaAmigo from './HolaAmigo'

const NewHello = applyStyles(Hello);
const NewHolaAmigo = applyStyles(HolaAmigo);

const HocDemo = () => {
  return (
    <div>
      <h1>HocDemo</h1>
      <NewHello color="primary"/>
      <NewHolaAmigo color="danger"/>
    </div>
  )
}

export default HocDemo
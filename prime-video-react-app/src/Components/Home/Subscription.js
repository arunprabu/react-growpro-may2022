import React from 'react'

const Subscription = () => {
  
  // internal styles
  const myStyles = {
    paraStyles: {
      backgroundColor: 'green', 
      textAlign: 'center', 
      color: '#fff'
    },
    btnStyles: {
      backgroundColor: 'red', 
      textAlign: 'center', 
      color: '#fff',
      padding: '10px 20px'
    }
  }

  return (
    <div>
      <h3>Subscription</h3>
      {/* Inline styles - Never go with internal styles in loops  */}
      <h4 style={{backgroundColor: 'red', textAlign: 'center', color: '#fff'}}>You are an active subscriber!</h4>
      <h5 style={{backgroundColor: 'yellow', textAlign: 'center', color: '#000'}}>Your subscription ends in 15 days!</h5>

      {/* Internal Styles */}
      <p style={myStyles.paraStyles}>RENEW NOW and GET 50% OFFER - COUPON CODE: OFF50</p>
      <button style={myStyles.btnStyles}>Subscribe</button>
    </div>
  )
}

export default Subscription
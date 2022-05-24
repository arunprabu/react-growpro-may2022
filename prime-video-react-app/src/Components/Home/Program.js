import React from 'react'

const Program = (props) => { // receive data from parent comp
  console.log(props);
  /* 
    * props are objects
    * using props we can receive data from parent comp
    * recommended way to receive props is ... in the name of 'props' 
    * props can also have children
    * props are read-only
  */

  return (
    <div className="card mb-3">
      <div className="card-header">
        Featured Program
        <span 
        className='badge bg-warning text-dark float-end'>
          {props.category}
        </span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.children}</p>
        <button type='button' className="btn btn-primary">Watch Now</button>
      </div>
      <div className="card-footer text-muted">
        {props.time}
      </div>
    </div>
  )
}

export default Program
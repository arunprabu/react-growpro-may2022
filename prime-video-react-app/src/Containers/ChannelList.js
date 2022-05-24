import React, { Component } from 'react';

class ChannelList extends Component{

  // render method is mandatory for class comp
  render(){
    console.log('inside render');
    // returning JSX is also mandatory
    return(
      <div>Channel List</div>
    )
  }
}

export default ChannelList;
import React, { Component } from 'react'

class MyProfile extends Component {
  // Two way Databinding 
  // JS <=> JSX
  state = {
    profileName: 'john'
  }

  handleProfileNameChange = (event) => {
    console.log(event.target.value);
    this.setState({
      profileName: event.target.value
    });
  }

  render() {
    console.log('Inside Render');
    return (
      <div>
        <h3>MyProfile</h3>
        {/* The following w/o onChange handler will render read-only field. refer console */}
        <input type="text" placeholder='Enter Name' value={this.state.profileName} 
          onChange={this.handleProfileNameChange}/>
        <p>Profile Name: {this.state.profileName}</p>
      </div>
    )
  }
}

export default MyProfile
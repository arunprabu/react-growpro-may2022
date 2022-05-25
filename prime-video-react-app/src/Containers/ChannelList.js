import React, { Component } from "react";

// class comp should extend react component
// only then render method will be called automatically
class ChannelList extends Component{

  // ideal place for comp-wide data
  /*
    * state is an obj
    * state is mutable. but do not mutate directly
    * use setState() to mutate state.. 
    * mutating state using setState() will result in re-rendering of the UI
    * upon changing the state using setState - render() method will be called.
    * only then the UI can be updated with updated state
    * setState will smartly merge the existing properties
    * Mutating stae using setState() will result in re-rendering cycle 
  */
  state = {
    channelResolution: '4K',
    channels: [
      { 
        id: 1,
        name: 'DiscoveryPlus',
        desc: 'Most Viewed Infotainment Channel!',
        logoURL: 'https://via.placeholder.com/200/0fe/000?text=DiscoveryPlus'
      },
      { 
        id: 2,
        name: 'NatGeo Wild',
        desc: 'Top Infotainment Channel!',
        logoURL: 'https://via.placeholder.com/200/123/fff?text=NatGeoWild'
      },
      { 
        id: 3,
        name: 'BBC Earth',
        desc: 'Best Infotainment Channel from BBC!',
        logoURL: 'https://via.placeholder.com/200/00f/fff?text=BBCEarth'
      },
      { 
        id: 4,
        name: 'LionsGate Play',
        desc: 'Most Popular HD Channel',
        logoURL: 'https://via.placeholder.com/200/0f0/000?text=LionsGate Play'
      } 
    ]
  }

  /* state is an obj */
  
  /* let's handle event */
  handleAddToFav = () => { // inside arrow fn you can have 'this' context
    console.log(this);
    // Do not mutate state directly. Use setState(). -- NOT RECOMMENDED
    // this.state.channels[0].name = "DiscoveryPlus [ADDED]"; //this won't re-render UI

    this.setState({
      channels: [
        { 
          id: 1,
          name: 'DiscoveryPlus [ADDED]',
          desc: 'Most Viewed Infotainment Channel!',
          logoURL: 'https://via.placeholder.com/200/0fe/000?text=DiscoveryPlus'
        },
        { 
          id: 2,
          name: 'NatGeo Wild',
          desc: 'Top Infotainment Channel!',
          logoURL: 'https://via.placeholder.com/200/123/fff?text=NatGeoWild'
        },
        { 
          id: 3,
          name: 'BBC Earth',
          desc: 'Best Infotainment Channel from BBC!',
          logoURL: 'https://via.placeholder.com/200/00f/fff?text=BBCEarth'
        },
        { 
          id: 4,
          name: 'LionsGate Play',
          desc: 'Most Popular HD Channel',
          logoURL: 'https://via.placeholder.com/200/0f0/000?text=LionsGate Play'
        } 
      ]
    });
  }

  // render mandatory 
  render(){
    // NEVER EVER MUTATE STATE HERE
    console.log('Inside Render');
    return(
      <div className="row">
        <h3>Explore our Partner Channels in {this.state.channelResolution}</h3>

        <div className="col-md-3">
          <div className="card">
            <img src={this.state.channels[0].logoURL} className="card-img-top" 
              alt={this.state.channels[0].name} />
            <div className="card-body">
              <h5 className="card-title">{this.state.channels[0].name}</h5>
              <p className="card-text">{this.state.channels[0].desc}</p>
              <button type="button" className="btn btn-primary" 
              onClick={this.handleAddToFav}>Add to Favorite</button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src={this.state.channels[1].logoURL} className="card-img-top" 
              alt={this.state.channels[1].name} />
            <div className="card-body">
              <h5 className="card-title">{this.state.channels[1].name}</h5>
              <p className="card-text">{this.state.channels[1].desc}</p>
              <button type="button" className="btn btn-primary">Add to Favorite</button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src={this.state.channels[2].logoURL} className="card-img-top" 
              alt={this.state.channels[2].name} />
            <div className="card-body">
              <h5 className="card-title">{this.state.channels[2].name}</h5>
              <p className="card-text">{this.state.channels[2].desc}</p>
              <button type="button" className="btn btn-primary">Add to Favorite</button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src={this.state.channels[3].logoURL} className="card-img-top" 
              alt={this.state.channels[3].name} />
            <div className="card-body">
              <h5 className="card-title">{this.state.channels[3].name}</h5>
              <p className="card-text">{this.state.channels[3].desc}</p>
              <button type="button" className="btn btn-primary">Add to Favorite</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ChannelList;
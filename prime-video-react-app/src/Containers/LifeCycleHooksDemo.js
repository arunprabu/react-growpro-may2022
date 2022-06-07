// lifecycle hooks are available only for class components
import React, { Component } from 'react'

class LifeCycleHooksDemo extends Component {

  constructor(props){
    // if a comp has a constrcutor -- super method should be called. 
    // constructor will be the first one called inside a class comp.
    super(props);
    console.log('=============1. Inside Constructor');

    // ideal place for you to have comp wide data in state -- empty state at least
    this.state = {
      isLoading: true,
      featureName: ''
    }

    this.myTimeout = null;
  }

  // lifecycle hook
  componentDidMount(){
    // this will be called only once after the initial rendering
    // upon successful rendering of the JSX -- componentDidMount will be called
    // whenever the comp is coming into view, componentDidMount will be called
    console.log('=============3. Inside componentDidMount');

    // ideal place for you to make AJAX calls. 
    // upon successful ajax call, you have to update the state here
    // mocking ajax call with timeout

    this.myTimeout = setTimeout( () => {
      // assuming that we get the data from the backend in 4 sec
      // you need to update the state upon getting resp from the backend 
      // you need to update state only if prev state and the data you receive from the backend are different.
      console.log('AJAX Call Successful and updating the state');
      this.setState({
        isLoading: false,
        featureName: 'LifeCycle Hooks Intro'
      });
    }, 4000);
  }  

  shouldComponentUpdate(nextProps, nextState){
    // when the state is updated this method will be called immediately
    // it has to return true or false mandatorily
    // compare the prev state and new state 
    // if changes are there then, return true, otherwise false
    console.log(this.state); // prevState
    console.log(nextState); // new State
    console.log('============= 4. Inside shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState){
    // called immediately after the UPDATE in JSX
    // NOT Called after INITIAL RENDERING 
    // use this as an opportunity to operate on DOM when the comp has been updated
    // Typical usage about comparing props
        // life this  if(this.props.something !== prevProps.somthing)
    console.log('============= 6. Inside componentDidUpdate');
  }

  componentWillUnmount(){
    // whenever the comp goes out of the view -- this will be called
    // ideal for you to clear intervals / timeouts / data 
    clearTimeout(this.myTimeout);
    console.log("============7. Inside componentWillUnmount -- comp destroyed");
  }

  render() {
    // NEVER EVER CHANGE STATE HERE
    // render method will be called automatically. 
    // for render method to be called .. this class comp should exten React.Component 
    console.log('=============2 & 5. Inside render');
    return (
      <>
        <h3>{this.state.featureName}</h3>

        {
          this.state.isLoading? 
          <div className='spinner-border text-primary'></div>
          :
          <div>
            <h4>Learn more about lifecycle hooks here</h4>
            <a href="https://17.reactjs.org/docs/react-component.html">Read more about Lifecycle Hooks </a>
          </div>
        }
      </>
    )
  }
}

export default LifeCycleHooksDemo;
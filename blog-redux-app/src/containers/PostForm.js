import React, { Component } from 'react'
import { connect } from 'react-redux'; // Step 10.1 Let's import connect from react-redux 
import { createPost } from '../services/postService';

export class PostForm extends Component {

  /* Step 9: Almost done... 
  to dispatch action, let's write form submission logic in PostForm.js */

  // Step 9.2 then, work on handleSubmit method 
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('To submit');
    console.log(this.postTitle.value); // form data
    console.log(this.postContent.value); // form data

    // Step 9.3 let's make the form data as object 
    const formData = {
      title: this.postTitle.value,
      body: this.postContent.value
    }
    console.log(formData);

    // Step 11: It's time to dispatch an action
    console.log(this.props);
    this.props.dispatch(createPost(formData));
  }

  render() {
    return (
      <div>
        <h3>Create Post!</h3>
  
        {/* Step 9.1 form code can be  the following with ref's and submission logic   */}
        <form className='text-left' onSubmit={this.handleSubmit}>
          <input required type="text"
            placeholder="Enter Post Title"
            className='form-control' ref={(input) => this.postTitle = input}/><br />

          <textarea required rows="5" cols="28"
            placeholder="Enter Post"
            className='form-control'  ref={(input) => this.postContent = input} /><br />
          <button className='btn btn-primary' type='submit'>Add Post</button>
        </form>
      </div>
    )
  }
}

// Step 10.2 //last line of the compoent should be the following. 
// after connecting props will be available in this component. 
// thru props we can get dispatch method and store data (additional step is needed) 
export default connect()(PostForm)



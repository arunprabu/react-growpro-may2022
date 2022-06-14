import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/* Step 16 in PostList.js, let's get the state data from the store and 
  convert them into read-only props. 
*/ 

export class PostList extends Component {



  render() {
    console.log(this.props);

    let posts = null;
    if(this.props.posts && this.props.posts.length > 0){
      posts = this.props.posts.map((post, index) =>{
        console.log(post);
        return(
          // use id a key instead of index
          <div className="list-group-item list-group-item-action text-start" key={index}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </h5>
              <small>Post Id: {post.id}</small>
            </div>
            <p className="mb-1 text-left">{post.body}</p>
          </div>
        )
      });
    }


    return (
      <div>
        <h3>Post List</h3>
        <div className="list-group text-left">
          { this.props.posts && this.props.posts.length > 0? 
            posts
            :
            <div className='alert alert-warning'>
              No Posts Found. You can add one!
            </div>
          }
        
        
        </div>
      </div>
    )
  }
}

// converting the state to props.
const mapStateToProps = (state) => {
  return {
    posts: state.posts // subscribing to state.posts and converting it to this.props.posts
  }
} 

export default connect(mapStateToProps)(PostList);
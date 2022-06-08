import React, { useEffect, useState } from 'react'

const Blog = () => {

  console.log('************** 1. Program Started');
  const [topicName, setTopicName] = useState('React Hooks Demo');
  const [publishedDate, setPublishedDate] = useState(new Date());

  // is an alternative to componentDidMount, componentDidUpdate for a fn comp
  useEffect(() => {
    console.log('************** 3. Inside useEffect');
    // ideal place for you to make AJAX calls. 
    // this callback fn is known as effect. this will be called once automatically after initial render
    // effect runs after every completed render (upon initial render and also upon update as well)
    document.title = topicName;
    
  }, [ topicName ]); // second param is dependency -- it is optional
  // if the dep is changed by any means, useEffect callback fn will be called 
  // by default useEffect callback will be called once automatically after initial render
  // remove the dep and have empty array then see
  
  const handleChangeTopic = () => {
    console.log('************** 4. Inside handleChangeTopic')
    setTopicName('[CLICKED]: Demo of useEffect Hook!');
  }

  const handleUpdateDate = () => {
    setPublishedDate(new Date());
  }

  console.log('************** 2. Before Return');
  return (
    <div>
      <h2>Blog | useEffect() Demo</h2>
      <p>Topic: {topicName}</p>
      <button onClick={handleChangeTopic}>Change Topic Name</button>

      <p>Published Date: {publishedDate.toISOString()}</p>
      <button onClick={handleUpdateDate}>Update Published Date</button>
    </div>
  )
}

export default Blog
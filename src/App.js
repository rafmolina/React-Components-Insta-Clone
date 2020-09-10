/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from 'react';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import Posts from './components/Posts/Posts';

const App = () => {

  const [ posts, setPosts ] = useState(dummyData)

  const likePost = postId => {
    setPosts( 
      posts.map(x => (x.id === postId ? { ...x , likes : x.likes +1}: x)) 
    )

  };
   
  return (
    <div className='App'>
      <SearchBar />
      <Posts likePost = {likePost} posts = {posts} />
      { /* Add SearchBar and Posts here to render them */} 
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
  //   setPosts ( posts.map( item => {
  //     if (postId === item.id) {
  //       return {...item , likes : item.likes +1 };
  //     }
  //     return item;
  //   })
  //   )
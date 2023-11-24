import React from 'react';
import Post from './Post'

const Feeds = ({ posts }) => {
  return (
    <>

    {posts.map(post => (
        <Post post={post} key = {post.id}/>
    ))}
      
    </>
  )
}

export default Feeds

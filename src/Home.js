import React from 'react';
import Feeds from './Feeds';

const Home = ({ posts, fetchError, isLoading }) => {
  return (
    <main className='Home'>
      {isLoading && <p className="statusMsg">Loading Posts....</p>}
      {!isLoading && fetchError && <p className="statusMsg" style={{ colr: "red" }}>{fetchError}</p>}
      {!isLoading && ! fetchError && (posts.length ? (
          <Feeds posts = {posts}/>
      ): (
          <p style={{ marginTop: '2rem'}}>NO Post Here!</p>
      ))}
    </main>
  )
}

export default Home


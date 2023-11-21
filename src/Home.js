import React from 'react';
import Feeds from './Feeds';

const Home = ({ posts }) => {
  return (
    <main className='Home'>
      {posts.length ? (
          <Feeds posts = {posts}/>
      ): (
          <p style={{ marginTop: '2rem'}}>NO Post Here!</p>
      )}
    </main>
  )
}

export default Home


import React from 'react';
import './app-header.css'

const AppHeader = ({likedPosts, allPosts}) => {
  return (
    <div className='app-header d-flex'>
      <h1>Ivanov Danila</h1>
      <h2>{allPosts} записей, из них понравилось {likedPosts}</h2>
    </div>
  )
}

export default AppHeader;
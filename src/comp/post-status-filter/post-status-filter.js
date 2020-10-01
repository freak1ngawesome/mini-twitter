import React from 'react';
import './post-status-filter.css'

const PostStatusFilter = (props) => {
  
  return (
    <div className='btn-group'>
      <button type='button' className='btn btn-info' onClick={() => props.onFilterSelect('all')}>Все</button>
      <button type='button' className='btn btn-outline-secondary' onClick={() => props.onFilterSelect('like')}>Понравилось</button>
    </div>
  )
}

export default PostStatusFilter;
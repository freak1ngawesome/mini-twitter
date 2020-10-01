import React from 'react';
import PostListItem from '../post-list-item'
import './post-list.css'

const PostList = ({data,onDelete,onToggleImportant,onToggleLiked}) =>{
  const elems = data.map(e => {
    const {id, ...itemProps} = e;
    return(
      <li key={id} className='list-group-item'>
        <PostListItem 
        {...itemProps}
        onDelete={() => onDelete(id)} 
        onToggleImportant={() => onToggleImportant(id)} 
        onToggleLiked={() => onToggleLiked(id)}
        />
      </li>
    )
  })
  return (
    <ul className='app-list list-group'>
      {elems}
    </ul>
  )
}

export default PostList;
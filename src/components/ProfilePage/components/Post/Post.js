import React from "react";
import './styles.css';

const Post = (props) => {
  const { post } = props;
  
  return (
    <div>
      <img className='post__avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBFrATYCVOQFXHK7Lv98rxe1RK1bKw_x8Qg&usqp=CAU' alt='avatar' />
      {post} <br />
      <span>like</span>
    </div>
  )
}

export default Post;
import React from "react";
import AddPostFormReduxForm from "../../../AddPostForm/AddPostForm";
import Post from "../Post/Post";
import './styles.css';

const Posts = (props) => {
  const { posts, addNewPost } = props;

  const onClickAddNewPost = (value) => {
    addNewPost(value.newPostText);
  };

  const postsElements = posts.map((post, index) => <Post post={post.post} key={index.toString()}/>);

  return (
    <div className="posts__container">
      {postsElements}
      <AddPostFormReduxForm onSubmit={onClickAddNewPost} />
    </div>
  )
}

export default Posts;
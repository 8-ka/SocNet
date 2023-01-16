import { connect } from "react-redux";
import Posts from "../../components/ProfilePage/components/Posts/Posts";
import { profileActions } from "../../data/profile_container";

const mapStateToProps = (state) => {
  const { posts, newPostText } = state.profilePage;
    return {
        posts,
        newPostText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleUpdateInputPost: (text) => {
            dispatch(profileActions.updatePost(text));
        },
        addNewPost: (newPostText) => {
            dispatch(profileActions.addPost(newPostText));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
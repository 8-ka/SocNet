import React from "react";
import PostsContainer from "../../containers/PostsContainer/PostsContainer";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import './styles.css'

const ProfilePage = (props) => {
  const { className, userProfile, userStatus, userUpdateStatus } = props;

  return (
    <div className={className}>
      <ProfileInfo userProfile={userProfile} userStatus={userStatus} userUpdateStatus={userUpdateStatus} />
      <PostsContainer />
    </div>
  );
}

export default ProfilePage;
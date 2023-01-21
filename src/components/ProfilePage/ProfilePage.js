import React from "react";
import PostsContainer from "../../containers/PostsContainer/PostsContainer";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import './styles.css'

const ProfilePage = (props) => {
  const { className, userProfile, userStatus, userUpdateStatus, isOwner, saveAvatar } = props;

  return (
    <div className={className}>
      <ProfileInfo isOwner={isOwner} userProfile={userProfile} userStatus={userStatus} userUpdateStatus={userUpdateStatus} saveAvatar={saveAvatar}/>
      <PostsContainer />
    </div>
  );
}

export default ProfilePage;
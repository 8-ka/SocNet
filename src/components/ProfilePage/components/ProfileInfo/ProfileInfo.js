import React from "react";
import Loader from "../../../Loader/Loader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import './styles.css'

const ProfileInfo = (props) => {
  const { className, userProfile, userStatus, userUpdateStatus } = props;

  if (!userProfile) {
    return <Loader />
  }

  return (
    <div>
      <div className={className}>
        {/* <img className="profile-page__img" src='https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg' alt='main-img' /> */}
        <img src={userProfile.photos.small} alt={'user_photo'} />
      </div>
      <div>
        <span>{userProfile.fullName}</span>
      </div>
      <div>
        <ProfileStatus userStatus={userStatus} userUpdateStatus={userUpdateStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;

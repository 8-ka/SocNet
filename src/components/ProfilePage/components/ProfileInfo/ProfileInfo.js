import React from "react";
import Loader from "../../../Loader/Loader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import defaultAvatar from '../../../Users/img/default-avatar.jpg';
import './styles.css'

const ProfileInfo = (props) => {
  const { className, userProfile, userStatus, userUpdateStatus, isOwner, saveAvatar } = props;

  if (!userProfile) {
    return <Loader />
  }

  const handleAvatarChange = (e) => {
    if(e.target.files.length) {
      saveAvatar(e.target.files[0]);
    }
  }

  return (
    <div>
      <div className={className}>
        {/* <img className="profile-page__img" src='https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg' alt='main-img' /> */}
        <img className='img_size' src={userProfile.photos.small || defaultAvatar} alt={'user_photo'} />
      </div>
      {isOwner &&
        <div>
          <input type="file" onChange={handleAvatarChange}/>
        </div>}
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

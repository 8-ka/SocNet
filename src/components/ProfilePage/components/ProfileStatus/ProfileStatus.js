import React, { useState, useEffect } from "react";
import './styles.css'

const ProfileStatus = (props) => {
  const { userStatus, userUpdateStatus } = props;

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(userStatus);

  useEffect(() => {
    setStatus(userStatus);
  }, [userStatus])

  const handleSetStatus = () => {
    setEditMode(true);
  }

  const onUpdateInput = () => {
    setEditMode(false);
    userUpdateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <>
      {!editMode &&
        <div>
          <span onDoubleClick={handleSetStatus}>{userStatus || '-'}</span>
        </div>}
      {editMode &&
        <div>
          <input value={status}
            onBlur={onUpdateInput}
            autoFocus={true}
            onChange={onStatusChange}
          />
        </div>}
    </>
  );
}

export default ProfileStatus;

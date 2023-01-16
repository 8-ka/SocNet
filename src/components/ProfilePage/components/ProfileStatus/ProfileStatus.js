import React, { useState } from "react";
import './styles.css'

const ProfileStatus = (props) => {
  const { userStatus } = props;

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(userStatus);

  // componentDidUpdate(prevProps) {
  //   if (prevProps.userStatus !== this.props.userStatus) {
  //     this.setState({
  //       userStatus: this.props.userStatus,
  //     })
  //   }
  // }

  const handleSetStatus = () => {
    setEditMode(true);
  }

  const onUpdateInput = () => {
    setEditMode(false);
    props.userUpdateStatus(status);
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

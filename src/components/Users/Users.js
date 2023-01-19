import React from 'react';
import { NavLink } from 'react-router-dom';
import Paginator from '../Paginator/Paginator';
import defaultAvatar from './img/default-avatar.jpg';
import './styles.css';

const Users = (props) => {
  const { totalCount, pageSize, onClickCurrentPage, users, isFollowingProgress, followThunkCreator, unFollowThunkCreator } = props;

  return (
    <div>
      <Paginator totalCount={totalCount} pageSize={pageSize} onClickCurrentPage={onClickCurrentPage} />
      {users.map((user, id) =>
        <div key={id.toString()}>
          <div>
            <NavLink to={`/profile/${user.id}`}>
              <img className='img_size' src={user.photos.small ? user.photos.small : defaultAvatar} alt={`avatar_${user.id}`} />
            </NavLink>
          </div>
          <div>
            <span>{user.name}</span>
          </div>
          <div>
            <span>{'user.location.country'}</span>
          </div>
          <div>
            <span>{'user.location.city'}</span>
          </div>
          <div>
            <span>{user.status}</span>
          </div>
          <div>
            {user.followed
              ? <button
                disabled={isFollowingProgress.some(id => id === user.id)}
                onClick={() => followThunkCreator(user.id)}
              >
                follow
              </button>
              : <button
                disabled={isFollowingProgress.some(id => id === user.id)}
                onClick={() => unFollowThunkCreator(user.id)}
              >
                unfollow
              </button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;

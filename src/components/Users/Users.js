import React from 'react';
import { NavLink } from 'react-router-dom';
import defaultAvatar from './img/default-avatar.jpg';
import './styles.css';

const Users = (props) => {
  const { totalCount, pageSize, onClickCurrentPage, users, isFollowingProgress, followThunkCreator, unFollowThunkCreator } = props;

  const totalPages = Math.ceil(totalCount / pageSize);

  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((page, index) =>
          <span key={index.toString()} onClick={() => onClickCurrentPage(page)}>{page}</span>
        )}
      </div>
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

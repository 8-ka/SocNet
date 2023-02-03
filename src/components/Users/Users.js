import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { usersSelectors } from '../../data/users_container';
import { getUsersThunkCreator } from '../../data/users_container/reducers';
import Paginator from '../Paginator/Paginator';
import UserSearchForm from '../UsersSearchForm/UserSearchForm';
import defaultAvatar from './img/default-avatar.jpg';
import './styles.css';

export const Users = (props) => {
  const { followThunkCreator, unFollowThunkCreator } = props;

  const users = useSelector(usersSelectors.getUsers);
  const isFollowingProgress = useSelector(usersSelectors.getIsFollowingProgress);
  const totalCount = useSelector(usersSelectors.getTotalCount);
  const pageSize = useSelector(usersSelectors.getPageSize);
  const currentPage = useSelector(usersSelectors.getCurrentPage);
  const filter = useSelector(usersSelectors.getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunkCreator(currentPage, pageSize, filter));
  }, []);

  const onClickCurrentPage = (currentPage) => {
    dispatch(getUsersThunkCreator(currentPage, pageSize, filter));
  }

  const onFilterChanged = (filter) => {
    dispatch(getUsersThunkCreator(1, pageSize, filter));
  }

  return (
    <div>
      <UserSearchForm onFilterChanged={onFilterChanged} />

      <Paginator currentPage={currentPage} totalCount={totalCount} pageSize={pageSize} onClickCurrentPage={onClickCurrentPage} />

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

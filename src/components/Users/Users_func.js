import axios from 'axios';
import React from 'react';
import defaultAvatar from './img/default-avatar.jpg';
import './styles.css';

const Users = (props) => {
  const { users, follow, unFollow, setUsers } = props;

  if (users === undefined) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        setUsers(response.data.items)
      });
  }

  // let usersState = {
  //   users: [
  //     {
  //       id: 1,
  //       name: 'Joe',
  //       photoUrl: 'https://kartinkin.net/uploads/posts/2022-03/thumbs/1646525538_25-kartinkin-net-p-kartinki-so-stichem-28.jpg',
  //       isFollowed: false,
  //       location: {
  //         country: 'Turkey',
  //         city: 'Istanbul',
  //       },
  //       status: 'Waiting for...'
  //     },
  //     {
  //       id: 2,
  //       name: 'Jack',
  //       photoUrl: 'https://kartinkin.net/uploads/posts/2022-03/thumbs/1646525538_25-kartinkin-net-p-kartinki-so-stichem-28.jpg',
  //       isFollowed: false,
  //       location: {
  //         country: 'Indonesia',
  //         city: 'Denpasar',
  //       },
  //       status: 'Still waiting for...'
  //     },
  //     {
  //       id: 3,
  //       name: 'Jade',
  //       photoUrl: 'https://kartinkin.net/uploads/posts/2022-03/thumbs/1646525538_25-kartinkin-net-p-kartinki-so-stichem-28.jpg',
  //       isFollowed: true,
  //       location: {
  //         country: 'Afganistan',
  //         city: 'Kabul',
  //       },
  //       status: 'Already here'
  //     },
  //   ],
  //   newUser: '',
  // }
 
  const usersList = users.map((user, id) =>
    <div key={id.toString()}>
      <div>
        <img className='img_size' src={!user.photos.small ? user.photos.small : defaultAvatar} alt={`avatar_${user.id}`} />
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
          ? <button onClick={() => { follow(user.id) }}>follow</button>
          : <button onClick={() => { unFollow(user.id) }}>unfollow</button>}
      </div>
    </div>
  )

  return (
    <div>
      {usersList}
    </div>
  );
}

export default Users;

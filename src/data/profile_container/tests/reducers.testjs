import { profileActions, profileReducers } from '..';

test('add new post', () => {
  const action = profileActions.addPost('test');
  const state = {
    posts: [
      { id: 1, post: 'Hi, there!' },
      { id: 2, post: 'Ooops' },
      { id: 3, post: 'Great' },
      { id: 4, post: 'Look' },
      { id: 5, post: 'Like!' },
    ],
  }
  const newState = profileReducers.profilePageReducer(state, action);
  expect(newState.posts.length).toBe(5);
  expect(newState.posts[4].post).toBe('test');
});

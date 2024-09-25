import profileReducer, { addPost, deletePost } from './profile-reduser';

let state = {
  posts: [
    {
      id: 0,
      name: 'DiggerNigger',
      date: new Date(Math.round(+new Date() * Math.random())).toLocaleString(
        'ru-RU'
      ),
      message: 'message 0',
      likesCount: Math.round(Math.random() * 100),
    },
    {
      id: 1,
      name: 'DiggerNigger',
      date: new Date(Math.round(+new Date() * Math.random())).toLocaleString(
        'ru-RU'
      ),
      message: 'message 1',
      likesCount: Math.round(Math.random() * 100),
    },
    {
      id: 2,
      name: 'DiggerNigger',
      date: new Date(Math.round(+new Date() * Math.random())).toLocaleString(
        'ru-RU'
      ),
      message: 'message 2',
      likesCount: Math.round(Math.random() * 100),
    },
  ],
  profile: null,
  status: '',
  photoError: null,
  isFetching: false,
};

beforeEach(() => {
  state = {
    posts: [
      {
        id: 0,
        name: 'DiggerNigger',
        date: new Date(Math.round(+new Date() * Math.random())).toLocaleString(
          'ru-RU'
        ),
        message: 'message 0',
        likesCount: Math.round(Math.random() * 100),
      },
      {
        id: 1,
        name: 'DiggerNigger',
        date: new Date(Math.round(+new Date() * Math.random())).toLocaleString(
          'ru-RU'
        ),
        message: 'message 1',
        likesCount: Math.round(Math.random() * 100),
      },
      {
        id: 2,
        name: 'DiggerNigger',
        date: new Date(Math.round(+new Date() * Math.random())).toLocaleString(
          'ru-RU'
        ),
        message: 'message 2',
        likesCount: Math.round(Math.random() * 100),
      },
    ],
    profile: null,
    status: '',
    photoError: null,
    isFetching: false,
  };
});

it('after add post length of posts should be increment', () => {
  let action = addPost({
    newPostText: 'it-kamasutra.com',
    fullName: 'Bober-Kurva',
  });

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});

it('message of posts should be correct', () => {
  let action = addPost({
    newPostText: 'it-kamasutra.com',
    fullName: 'Bober-Kurva',
  });

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
  expect(newState.posts[3].message).toBe('it-kamasutra.com');
});

it('after delete the post length of posts should be decrement', () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});

it('after delete the post legth shodent be decrement if id is incorrect', () => {
  let action = deletePost(1000);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

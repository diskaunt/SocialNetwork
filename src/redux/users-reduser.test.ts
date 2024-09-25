import usersReduser, {
  followUnfollowSucces,
  InitialState,
} from './users-reduser';

let state: InitialState = {
  users: [
    {
      id: 0,
      name: 'Dimych 0',
      followed: false,
      status: 'status 0',
      photos: { large: null, small: null },
    },
    {
      id: 1,
      name: 'Dimych 1',
      followed: false,
      status: 'status 1',
      photos: { large: null, small: null },
    },
    {
      id: 2,
      name: 'Dimych 2',
      followed: true,
      status: 'status 2',
      photos: { large: null, small: null },
    },
    {
      id: 3,
      name: 'Dimych 3',
      followed: true,
      status: 'status 3',
      photos: { large: null, small: null },
    },
  ],
  pageSize: 24,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};
beforeEach(() => {
  state = {
    users: [
      {
        id: 0,
        name: 'Dimych 0',
        followed: false,
        status: 'status 0',
        photos: { large: null, small: null },
      },
      {
        id: 1,
        name: 'Dimych 1',
        followed: false,
        status: 'status 1',
        photos: { large: null, small: null },
      },
      {
        id: 2,
        name: 'Dimych 2',
        followed: true,
        status: 'status 2',
        photos: { large: null, small: null },
      },
      {
        id: 3,
        name: 'Dimych 3',
        followed: true,
        status: 'status 3',
        photos: { large: null, small: null },
      },
    ],
    pageSize: 24,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
  };
});

test('follow success', () => {
  const newState = usersReduser(
    state,
    followUnfollowSucces({ userId: 1, newObjectProps: { followed: true } })
  );
  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeTruthy();
});

test('unfollow success', () => {
  const newState = usersReduser(
    state,
    followUnfollowSucces({ userId: 3, newObjectProps: { followed: false } })
  );
  expect(newState.users[2].followed).toBeTruthy();
  expect(newState.users[3].followed).toBeFalsy();
});

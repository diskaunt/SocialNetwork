import { UsersType } from '../types/types';
import usersSlice, {
  followUnfollowSuccess,
  InitialState,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFollowingProgress,
} from './users-reduser';

describe('test for usersSlicer', () => {
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

  it('should handle follow', () => {
    const action = followUnfollowSuccess({
      userId: 1,
      newObjectProps: { followed: true },
    });
    const newState = usersSlice(state, action);
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
  });

  it('should handle unfollow', () => {
    const newState = usersSlice(
      state,
      followUnfollowSuccess({ userId: 3, newObjectProps: { followed: false } })
    );
    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].followed).toBeFalsy();
  });

  it('should handle setCurrentPage', () => {
    const action = setCurrentPage(2);
    const newState = usersSlice(state, action);
    expect(newState.currentPage).toBe(2);
  });

  it('should handle toggleFollowingProgress', () => {
    const action = toggleFollowingProgress({ userId: 1, isFetching: true });
    const newState = usersSlice(state, action);
    expect(newState.followingInProgress).toContain(1);

    const action2 = toggleFollowingProgress({ userId: 1, isFetching: false });
    const newState2 = usersSlice(state, action2);
    expect(newState2.followingInProgress).not.toContain(1);
  });

  it('should handle setTotalUsersCount', () => {
    const action = setTotalUsersCount(100);
    const newState = usersSlice(state, action);
    expect(newState.totalUsersCount).toBe(100);
  });

  it('should handle setUsers', () => {
    const users: UsersType[] = [
      {
        id: 4,
        name: 'Dimych 4',
        followed: false,
        status: 'status 4',
        photos: { large: null, small: null },
      },
    ];

    const action = setUsers(users);
    const newState = usersSlice(state, action);
    expect(newState.users).toEqual(users);
  });
});

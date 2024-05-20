const SET_USER_DATA = "SET-USER-DATA";
const SET_USER_PROFILE = "SET-USER-PROFILE";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
	profile: null
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case SET_USER_PROFILE:
      return {
				...state,
				profile: action.profile
			};

    default:
      return { ...state };
  }
};

export const setUserData = ({ id, email, login }) => ({
  type: SET_USER_DATA,
  data: { userId: id, email, login },
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export default authReduser;

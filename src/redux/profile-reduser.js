const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

const initialState = {
  posts: [],
  newPostText: "",
	profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost;
      let date = new Date();
      if (state.newPostText.trim().length) {
        newPost = {
          id: state.posts.length,
          name: "",
          date:
            ["0" + date.getDay(), "0" + (date.getMonth() + 1)]
              .map((component) => component.slice(-2))
              .join(".") +
            "." +
            date.getFullYear(),
          message: state.newPostText,
          likesCount: 0,
        };
        return { ...state, posts: [...state.posts, newPost], newPostText: "" };
      }
      return { ...state };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };

		case SET_USER_PROFILE:
			return {...state, profile: action.profile}

    default:
      return state ;
  }
};

export const addPost = (textarea) => ({
  type: ADD_POST,
  textarea,
});
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export default profileReducer;

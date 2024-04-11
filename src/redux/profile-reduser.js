const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const AUTO_SIZE = "AUTO-SIZE";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      if (state.newPostText !== "") {
        let date = new Date();
        let newPost = {
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
        state.posts.unshift(newPost);
        state.newPostText = "";
        action.textarea.style.cssText += "height: 36px; overflow: hidden;";
      }
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    case AUTO_SIZE:
      const textarea = action.textarea;
      textarea.style.height = "auto";
      if (textarea.clientHeight < 54) {
        textarea.style.height = 36 + "px";
      }
      if (textarea.scrollHeight > 201) {
        textarea.style.overflow = "auto";
        textarea.style.height = 201 + "px";
      } else {
        textarea.style.overflow = "hidden";
        textarea.style.height = textarea.scrollHeight + "px";
      }
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = (textarea) => ({
  type: ADD_POST,
  textarea,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const autoSizeActionCreator = (textarea) => ({
  type: AUTO_SIZE,
  textarea,
});

export default profileReducer;

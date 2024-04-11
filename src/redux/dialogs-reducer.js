const AUTO_SIZE = "AUTO-SIZE";
const UPDATE_NEW_MESSAHE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const dialogsReducer = (state, action) => {
  switch (action.type) {
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

    case UPDATE_NEW_MESSAHE_TEXT:
      state.newMessageText = action.newText;
      action.endOfPage.scrollIntoView(false);
      return state;

    case ADD_MESSAGE:
      if (state.newMessageText !== "") {
        let NewMessage = {
          id: state.messages.length,
          message: state.newMessageText,
          src: null,
        };
        state.messages.push(NewMessage);
        state.newMessageText = "";
        action.textarea.style.cssText += "height: 36px; overflow: hidden;";
        setTimeout(() =>
          action.endOfPage.scrollIntoView({ behavior: "smooth", block: "end" })
        );
      }
      return state;

    default:
      return state;
  }
};

export const autoSizeActionCreator = (textarea) => ({
  type: AUTO_SIZE,
  textarea,
});
export const updateNewMessageTextActionCreator = (text, scroll) => ({
  type: UPDATE_NEW_MESSAHE_TEXT,
  newText: text,
  endOfPage: scroll,
});
export const addMessageActionCreator = (textarea, scroll) => ({
  type: ADD_MESSAGE,
  textarea,
  endOfPage: scroll,
});

export default dialogsReducer;

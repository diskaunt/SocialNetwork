const AUTO_SIZE = "AUTO-SIZE";
const UPDATE_NEW_MESSAHE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

const initialState = {
  dialogs: [
    {
      id: "0",
      name: "Dimych",
      src: "",
    },
    {
      id: "1",
      name: "Misha",
      src: "",
    },
    {
      id: "2",
      name: "Alina",
      src: "",
    },
    {
      id: "3",
      name: "Pasha",
      src: "",
    },
    {
      id: "4",
      name: "Vanes",
      src: "",
    },
  ],
  messages: [
    {
      id: "0",
      message: "Hi, how are you?",
      src: "",
    },
    {
      id: "1",
      message:
        "how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?",
      src: "",
    },
    {
      id: "2",
      message: "yo",
      src: "",
    },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
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
      return { ...state };

    case UPDATE_NEW_MESSAHE_TEXT:
      action.endOfPage.scrollIntoView(false);
      return { ...state, newMessageText: action.newText };

    case ADD_MESSAGE:
      let newMessage;
      if (!state.newMessageText.trim().length) return { ...state };
      newMessage = {
        id: state.messages.length,
        message: state.newMessageText,
        src: null,
      };
      action.textarea.style.cssText += "height: 36px; overflow: hidden;";
      // setTimeout(
      //   () =>
      //     action.endOfPage.scrollIntoView({ behavior: "smooth", block: "end" }),
      //   0
      // );

      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, newMessage],
      };

    default:
      return { ...state };
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

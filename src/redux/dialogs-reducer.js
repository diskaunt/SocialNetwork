const ADD_MESSAGE = "3RACHA/dialogs/ADD-MESSAGE";

const initialState = {
  dialogs: [
    {
      id: "0",
      name: "Dimych",
      avatar: "",
    },
    {
      id: "1",
      name: "Misha",
      avatar: "",
    },
    {
      id: "2",
      name: "Alina",
      avatar: "",
    },
    {
      id: "3",
      name: "Pasha",
      avatar: "",
    },
    {
      id: "4",
      name: "Vanes",
      avatar: "",
    },
  ],
  messages: [
    {
      id: "0",
      message: "Hi, how are you?",
      avatar: "",
    },
    {
      id: "1",
      message:
        "how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?",
      avatar: "",
    },
    {
      id: "2",
      message: "yo",
      avatar: "",
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_MESSAGE:
      let newMessage;
			let date = new Date()
      if (!action.newMessageBody.trim().length) return { ...state };
      newMessage = {
        id: state.messages.length,
				date: date.toLocaleString("ru-RU"),
        message: action.newMessageBody,
        avatar: null,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    default:
      return { ...state };
  }
};

export const addMessage = (newMessageBody) => ({
  type: ADD_MESSAGE,
	newMessageBody,
});

export default dialogsReducer;

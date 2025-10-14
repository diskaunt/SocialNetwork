import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DialogType } from '../types/types';

// const ADD_MESSAGE = "3RACHA/dialogs/ADD-MESSAGE";

const initialState = {
  dialogs: [
    {
      id: 0,
      name: 'Dimych',
      messages: [
        {
          id: 0,
          message: 'Hi, how are you?',
        },
        {
          id: 1,
          message:
            'how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?',
        },
        {
          id: 2,
          message: 'yo',
        },
      ]
    },
    {
      id: 1,
      name: 'Misha',
      messages: [
        {
          id: 0,
          message: 'Hi, how are you?',
        },
        {
          id: 1,
          message:
            'how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?',
        },
        {
          id: 2,
          message: 'yo',
        },
      ],
    },
    {
      id: 2,
      name: 'Alina',
      messages: [
        {
          id: 0,
          message: 'Hi, how are you?',
        },
        {
          id: 1,
          message:
            'how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?',
        },
        {
          id: 2,
          message: 'yo',
        },
      ],
    },
    {
      id: 3,
      name: 'Pasha',
			messages: []
    },
    {
      id: 4,
      name: 'Vanes',
      messages: [
        {
          id: 0,
          message: 'Hi, how are you?',
        },
        {
          id: 1,
          message:
            'how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?',
        },
        {
          id: 2,
          message: 'yo',
        },
      ],
    },
  ] as Array<DialogType>,
};

const dialogsSlice = createSlice({
  name: 'dialogPage',
  initialState,
  reducers: {
    sendMessage(state, action: PayloadAction<{id: number, newMessageBody: string}>) {
      let {id, newMessageBody} = action.payload;
      let date = new Date();
      if (newMessageBody.trim().length > 0) {
        let newMessage = {
          id: state.dialogs.length,
          date: date.toLocaleString('ru-RU'),
          message: newMessageBody,
          avatar: '',
        };
        state.dialogs[id].messages = [...state.dialogs[id].messages, newMessage];
      }
    },
  },
});

export const { sendMessage } = dialogsSlice.actions;

export default dialogsSlice.reducer;

// const dialogsReducer = (
//   state: InitialStateType = initialState,
//   action: ActionsTypes
// ): InitialStateType => {
//   switch (action.type) {
//     case ADD_MESSAGE:
//       let newMessageBody = action.payload.newMessageBody;
//       let date = new Date();
//       if (newMessageBody.trim().length > 0) {
//         let newMessage = {
//           id: state.messages.length,
//           date: date.toLocaleString("ru-RU"),
//           message: newMessageBody,
//           avatar: "",
//         };
//         return {
//           ...state,
//           messages: [...state.messages, newMessage],
//         };
//       }
//       return { ...state };
//     default:
//       return { ...state };
//   }
// };

// type ActionsTypes = AddMessageType;

// type AddMessageType = {
//   type: typeof ADD_MESSAGE;
//   payload: { newMessageBody: string };
// };

// export const addMessage = (newMessageBody: string): AddMessageType => ({
//   type: ADD_MESSAGE,
//   payload: { newMessageBody },
// });

// export default dialogsReducer;

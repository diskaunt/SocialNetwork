import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DialogType, MessageType } from '../types/types';

// const ADD_MESSAGE = "3RACHA/dialogs/ADD-MESSAGE";

const initialState = {
  dialogs: [
    {
      id: 0,
      name: 'Dimych',
    },
    {
      id: 1,
      name: 'Misha',
    },
    {
      id: 2,
      name: 'Alina',
    },
    {
      id: 3,
      name: 'Pasha',
    },
    {
      id: 4,
      name: 'Vanes',
    },
  ] as Array<DialogType>,
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
  ] as Array<MessageType>,
};

const dialogsSlice = createSlice({
  name: 'dialogPage',
  initialState,
  reducers: {
    sendMessage(state, action: PayloadAction<string>) {
      let newMessageBody = action.payload;
      let date = new Date();
      if (newMessageBody.trim().length > 0) {
        let newMessage = {
          id: state.messages.length,
          date: date.toLocaleString('ru-RU'),
          message: newMessageBody,
          avatar: '',
        };
        state.messages = [...state.messages, newMessage];
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

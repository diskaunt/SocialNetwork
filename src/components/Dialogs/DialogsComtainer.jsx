import React from "react";
import {
  addMessageActionCreator,
  autoSizeActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const addMessage = (textarea, scroll) => {
    props.store.dispatch(addMessageActionCreator(textarea, scroll));
  };

  const messageChange = (text, scroll) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text, scroll));
  };

  const autoSize = (textarea) => {
    props.store.dispatch(autoSizeActionCreator(textarea));
  };

  return (
    <Dialogs
      addMessage={addMessage}
      updateNewMessageText={messageChange}
      autoSize={autoSize}
      dialogs={props.store.getState().dialogsPage.dialogs}
			messages={props.store.getState().dialogsPage.messages}
			newMessageText={props.store.getState().dialogsPage.newMessageText}
    />
  );
};

export default DialogsContainer;

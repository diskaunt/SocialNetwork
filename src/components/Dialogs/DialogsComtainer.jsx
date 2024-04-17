import React from "react";
import {
  addMessageActionCreator,
  autoSizeActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addMessage = (textarea, scroll) => {
          store.dispatch(addMessageActionCreator(textarea, scroll));
        };

        const messageChange = (text, scroll) => {
          store.dispatch(updateNewMessageTextActionCreator(text, scroll));
        };

        const autoSize = (textarea) => {
          store.dispatch(autoSizeActionCreator(textarea));
        };
        return (
          <Dialogs
            addMessage={addMessage}
            updateNewMessageText={messageChange}
            autoSize={autoSize}
            dialogs={store.getState().dialogsPage.dialogs}
            messages={store.getState().dialogsPage.messages}
            newMessageText={store.getState().dialogsPage.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;

import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  autoSizeActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem
      key={dialog.id}
      id={dialog.id}
      name={dialog.name || "name"}
      src={
        dialog.src ||
        "https://avatars.mds.yandex.net/i?id=91892a34e5229181f6a458b4befb7c883c863201-11944133-images-thumbs&n=13"
      }
    />
  ));

  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message
      key={message.id}
      message={message.message}
      src={
        message.src ||
        "https://avatars.mds.yandex.net/i?id=91892a34e5229181f6a458b4befb7c883c863201-11944133-images-thumbs&n=13"
      }
    />
  ));
	const scrollTo =React.createRef()
  const newMessageElement = React.createRef();

  const addMessage = () => {
    const textarea = newMessageElement.current;
		const scroll = scrollTo.current;
    props.dispatch(addMessageActionCreator(textarea, scroll));
  };

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
		const scroll = scrollTo.current;
    props.dispatch(updateNewMessageTextActionCreator(text, scroll));
  };

  const autoSize = () => {
    const textarea = newMessageElement.current;
    props.dispatch(autoSizeActionCreator(textarea));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div className={classes.messages_content}>
          <div className={classes.messagesElements}>{messagesElements}</div>
          <div className={classes.textareaWrapper}>
            <textarea
              onInput={autoSize}
              onChange={onMessageChange}
              ref={newMessageElement}
              value={props.dialogsPage.newMessageText}
              placeholder="Write a message..."
            />
            <div className={classes.btnWrapper}>
              <button onClick={addMessage}>Send</button>
            </div>
          </div>
					<div ref={scrollTo}> </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

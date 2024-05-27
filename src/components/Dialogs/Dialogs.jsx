import React, { useEffect } from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem
      key={dialog.id}
      id={dialog.id}
      name={dialog.name || "name"}
      src={
        dialog.src ||
        "https://i5.imageban.ru/out/2024/04/23/1bb19e775b66a89851ce626a69603c73.png"
      }
    />
  ));

  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message
      key={message.id}
      message={message.message}
      src={
        message.src ||
        "https://i5.imageban.ru/out/2024/04/23/1bb19e775b66a89851ce626a69603c73.png"
      }
    />
  ));
  const scrollTo = React.createRef();
  const newMessageElement = React.createRef();

  const onAddMessage = () => {
    const textarea = newMessageElement.current;
    const scroll = scrollTo.current;
    props.addMessage(textarea, scroll);
  };

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    const scroll = scrollTo.current;
    props.updateNewMessageText(text, scroll);
  };

  const onAutoSize = () => {
    const textarea = newMessageElement.current;
    props.autoSize(textarea);
  };

  useEffect(() => {
    scrollTo.current && scrollTo.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);


  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div className={classes.messages_content}>
          <div className={classes.messagesElements}>{messagesElements}</div>
          <div className={classes.textareaWrapper}>
            <textarea
              onInput={onAutoSize}
              onChange={onMessageChange}
              ref={newMessageElement}
              value={props.dialogsPage.newMessageText}
              placeholder="Write a message..."
            />
            <div className={classes.btnWrapper}>
              <button onClick={onAddMessage}>Send</button>
            </div>
          </div>
          <div ref={scrollTo}> </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

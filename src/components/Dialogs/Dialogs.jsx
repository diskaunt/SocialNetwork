import React, { useEffect, useRef } from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, Form } from "react-final-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import {
  composeValidators,
  maxLength,
  required,
} from "../../utils/validators/validators";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem
      key={dialog.id}
      id={dialog.id}
      name={dialog.name || "name"}
      avatar={
        dialog.avatar ||
        "https://i5.imageban.ru/out/2024/04/23/1bb19e775b66a89851ce626a69603c73.png"
      }
    />
  ));

  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message
      key={message.id}
      message={message.message}
      avatar={
        message.avatar ||
        "https://i5.imageban.ru/out/2024/04/23/1bb19e775b66a89851ce626a69603c73.png"
      }
      date={message.date}
    />
  ));

  const scrollTo = useRef(undefined);

  const onSubmit = async (values) => {
    await props.addMessage(values.newMessageBody);
    scrollTo.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div className={classes.content}>
          <div className={classes.messagesElements}>{messagesElements}</div>
          <AddMessageForm onSubmit={onSubmit} />
          <div ref={scrollTo}></div>
        </div>
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  useEffect(() => {
    // textarea.style.height = "auto";
    // if (textarea.clientHeight < 54) {
    //   textarea.style.height = 36 + "px";
    // }
    // if (textarea.scrollHeight > 201) {
    //   textarea.style.overflow = "auto";
    //   textarea.style.height = 201 + "px";
    // } else {
    //   textarea.style.overflow = "hidden";
    //   textarea.style.height = textarea.scrollHeight + "px";
    // }
  }, []);
  return (
    <Form
      onSubmit={props.onSubmit}
      initialValues={{}}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} className={classes.chatInputForm}>
          <Field
            name="newMessageBody"
            component={Textarea}
            validate={composeValidators(required, maxLength(100))}
            type="text"
            placeholder="Write a message..."
          />
          <div className={classes.btnWrapper}>
            <button type="submit" disabled={submitting || pristine}>
              Send
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default Dialogs;

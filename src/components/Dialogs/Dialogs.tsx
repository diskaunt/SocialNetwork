import React, { ComponentType, useRef } from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { connect } from "react-redux";
import { sendMessage } from "../../redux/dialogs-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { RootState } from "../../redux/redux-store";
import NewMessageForm from "./NewMessageForm";
import { DialogsPageType, DialogType, MessageType } from "../../types/types";

type MapStateToProps = {
  dialogsPage: DialogsPageType;
};

type MapActionToProps = {
  sendMessage: (message: string) => void;
};

type Props = MapStateToProps & MapActionToProps;

const Dialogs = (props: Props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog: DialogType) => (
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

  let messagesElements = props.dialogsPage.messages.map(
    (message: MessageType) => (
      <Message
        key={message.id}
        id={message.id}
        message={message.message}
        avatar={
          message.avatar ||
          "https://i5.imageban.ru/out/2024/04/23/1bb19e775b66a89851ce626a69603c73.png"
        }
        date={message.date}
      />
    )
  );

  const scrollTo = useRef<null | HTMLDivElement>(null);

  const onSendMessage = async (values: { newMessageBody: string }, form: Record<string, any>) => {
    await props.sendMessage(values.newMessageBody);
    scrollTo.current &&
      scrollTo.current.scrollIntoView({ behavior: "smooth", block: "start" });
    form.reset()
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div className={classes.content}>
          <div className={classes.messagesElements}>{messagesElements}</div>
          <NewMessageForm onSendMessage={onSendMessage} />
          <div ref={scrollTo}></div>
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state: RootState): MapStateToProps => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose<ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, { sendMessage })
)(Dialogs);

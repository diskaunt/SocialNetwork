import React, { useRef } from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { connect } from "react-redux";
import { addMessage } from "../../redux/dialogs-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { RootState } from "../../redux/redux-store";
import NewMessageForm from "./NewMessageForm";
import { DialogsPageType, DialogType, MessageType } from "../../types/types";

type MapStateToPropsType = {
  dialogsPage: DialogsPageType;
};

type MapActionToPropsType = {
  addMessage: (message: string) => void;
};

type PropsType = MapStateToPropsType & MapActionToPropsType;

const Dialogs = (props: PropsType) => {
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

  const onSubmit = async (values: { newMessageBody: string }) => {
    await props.addMessage(values.newMessageBody);
    scrollTo.current &&
      scrollTo.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div className={classes.content}>
          <div className={classes.messagesElements}>{messagesElements}</div>
          <NewMessageForm onSubmit={onSubmit} />
          <div ref={scrollTo}></div>
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state: RootState): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { addMessage })
)(Dialogs);

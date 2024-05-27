import { connect } from "react-redux";
import {
  addMessageActionCreator,
  autoSizeActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (textarea, scroll) => {
      dispatch(addMessageActionCreator(textarea, scroll));
    },
    updateNewMessageText: (text, scroll) => {
      dispatch(updateNewMessageTextActionCreator(text, scroll));
    },
    autoSize: (textarea) => {
      dispatch(autoSizeActionCreator(textarea));
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;

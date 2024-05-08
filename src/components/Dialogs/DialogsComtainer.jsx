import { connect } from "react-redux";
import {
  addMessageActionCreator,
  autoSizeActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const addMessage = (textarea, scroll) => {
//           store.dispatch(addMessageActionCreator(textarea, scroll));
//         };

//         const messageChange = (text, scroll) => {
//           store.dispatch(updateNewMessageTextActionCreator(text, scroll));
//         };

//         const autoSize = (textarea) => {
//           store.dispatch(autoSizeActionCreator(textarea));
//         };
//         return (
//           <Dialogs
//             addMessage={addMessage}
//             updateNewMessageText={messageChange}
//             autoSize={autoSize}
//             dialogs={store.getState().dialogsPage.dialogs}
//             messages={store.getState().dialogsPage.messages}
//             newMessageText={store.getState().dialogsPage.newMessageText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

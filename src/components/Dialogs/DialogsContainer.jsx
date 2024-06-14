import { connect } from "react-redux";
import {
  addMessage,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
  };
};

export default compose(withAuthRedirect,
	connect(
		mapStateToProps,
		{addMessage}
	))(Dialogs)

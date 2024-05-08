import Friends from "./Friends";
import { connect } from "react-redux";

// const FriendsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => <Friends sidebar={store.getState().sidebar} />}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
  };
};

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;

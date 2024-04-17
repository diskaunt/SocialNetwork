import React from "react";
import Friends from "./Friends";
import StoreContext from "../../../StoreContext";

const FriendsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => <Friends sidebar={store.getState().sidebar} />}
    </StoreContext.Consumer>
  );
};

export default FriendsContainer;

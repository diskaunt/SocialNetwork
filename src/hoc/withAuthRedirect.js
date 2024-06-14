import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.auth.isAuth) return <Navigate to={"/login"} />;
    return <Component {...props} />;
  };
  const connectedRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return connectedRedirectComponent;
};

const mapStateToPropsForRedirect = (state) => ({
  auth: state.auth,
});

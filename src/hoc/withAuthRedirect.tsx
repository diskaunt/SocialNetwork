import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/redux-store";
import { AuthType } from "../types/types";

type MapStateToPropsForRedirect = {
  auth: AuthType;
};

const mapStateToPropsForRedirect = (
  state: RootState
): MapStateToPropsForRedirect => ({
  auth: state.auth,
});

export const withAuthRedirect = <CP extends object>(
  Component: ComponentType<CP>
) => {
  const RedirectComponent = (props: MapStateToPropsForRedirect) => {
    if (!props.auth.isAuth) return <Navigate to={"/login"} />;
    return <Component {...props as CP} />;
  };
  return connect<MapStateToPropsForRedirect, {}, CP, RootState>(mapStateToPropsForRedirect)(RedirectComponent);
};

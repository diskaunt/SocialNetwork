import {
  addPost,
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from "../../redux/profile-reduser";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import Profile from "./Profile";
import { Navigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let ProfileContainer = (props) => {
  let userId = useParams().userId;
  userId ??= props.auth.userId;
  useEffect(() => {
    userId && props.getUserProfile(userId);
    userId && props.getUserStatus(userId);
  }, [userId]);
  return userId? <Profile {...props} />: <Navigate to={"/login"} />;
};

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
		auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  addPost,
  getUserProfile,
  getUserStatus,
  updateUserStatus,
})(ProfileContainer);

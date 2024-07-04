import {
  addPost,
  deletePost,
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from "../../redux/profile-reduser";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import Profile from "./Profile";
import { Navigate, useParams } from "react-router-dom";

let fullsum = 0;

let ProfileContainer = ({ getUserProfile, getUserStatus, auth, ...props }) => {
  let userId = useParams().userId;
  userId ??= auth.userId;
  useEffect(() => {
    userId && getUserProfile(userId);
    userId && getUserStatus(userId);
  }, [userId]);

	return userId ? (
    <Profile auth={auth} {...props} />
  ) : (
    <Navigate to={"/login"} />
  );
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
  deletePost,
})(ProfileContainer);

import {
  addPost,
  updateNewPostText,
  getUserProfile,
  getUserStatus,
	updateUserStatus,
} from "../../redux/profile-reduser";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import Profile from "./Profile";
import { Route, Routes, useMatch } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let ProfileContainer = (props) => {
  let userId = useMatch("/profile/:userId?").params.userId;
  userId ??= props.auth.userId;
  useEffect(() => {
    userId && props.getUserProfile(userId);
    userId && props.getUserStatus(userId);
  }, [userId]);

  return (
    <Routes>
      <Route path={`:${userId}?`} element={<Profile {...props} />} />
    </Routes>
  );
};

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    addPost,
    updateNewPostText,
    getUserProfile,
    getUserStatus,
		updateUserStatus,
  })
)(ProfileContainer);

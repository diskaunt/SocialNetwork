import {
  addPost,
  updateNewPostText,
  getUserProfile,
} from "../../redux/profile-reduser";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import Profile from "./Profile";
import { Navigate, Route, Routes, useMatch } from "react-router-dom";

let ProfileContainer = (props) => {
  let userId = useMatch("/profile/:userId?").params.userId;
  userId ??= props.auth.userId;
  useEffect(() => {
    userId && props.getUserProfile(userId);
  }, [userId]);

	if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <Routes>
      <Route path={`:${userId}?`} element={<Profile {...props} />} />
    </Routes>
  );
};

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  addPost,
  updateNewPostText,
  getUserProfile,
})(ProfileContainer);

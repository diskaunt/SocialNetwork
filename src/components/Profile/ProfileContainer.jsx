import {
  addPost,
  updateNewPostText,
  setUserProfile,
} from "../../redux/profile-reduser";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import Profile from "./Profile";
import axios from "axios";
import { Route, Routes, useMatch } from "react-router-dom";

let ProfileContainer = (props) => {
  let userId = useMatch("/profile/:userId?").params.userId;
  userId ??= props.auth.userId;
  useEffect(() => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
      .then((response) => {
        props.setUserProfile(response.data);
      });
    return () => {};
  }, [userId]);

  return (
    <Routes>
      <Route path=":userId?" element={<Profile {...props} />} />
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
  setUserProfile,
})(ProfileContainer);

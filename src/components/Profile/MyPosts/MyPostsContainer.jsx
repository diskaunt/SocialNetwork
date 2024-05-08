import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         const onPostChange = (text) => {
//           store.dispatch(updateNewPostTextActionCreator(text));
//         };

//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={store.getState().profilePage.posts}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {dispatch(addPostActionCreator())},
		updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

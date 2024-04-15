import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reduser";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _callSubscriber() {
    console.log("no subscribers (observers)");
  },

  _state: {
    profilePage: {
      posts: [
        {
          id: "0",
          name: "name",
          likesCount: "16",
          src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
          message:
            "Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi",
        },
        {
          id: "1",
          name: "name",
          likesCount: "32",
          src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
          message: "I love Bananas ",
        },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        {
          id: "0",
          name: "Dimych",
          src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
        },
        {
          id: "1",
          name: "Misha",
          src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
        },
        {
          id: "2",
          name: "Alina",
          src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
        },
        {
          id: "3",
          name: "Pasha",
          src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
        },
        {
          id: "4",
          name: "Vanes",
          src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
        },
      ],
      messages: [
        {
          id: "0",
          message: "Hi, how are you?",
          src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
        },
        {
          id: "1",
          message:
            "how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?how is your it-kamasutra?",
          src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
        },
        {
          id: "2",
          message: "yo",
          src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
        },
      ],
      newMessageText: "",
    },
    sidebar: {
      friends: [
        {
          id: "0",
          name: "name",
          src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
        },
        {
          id: "1",
          name: "name",
          src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
        },
        {
          id: "2",
          name: "name",
          src: "https://photogora.ru/img/product/thumb/4897/5d2efa2ce25635320511549050122246.jpg",
        },
      ],
    },
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber()
  },
};

export default store;
window.store = store;
window.state = store.getState();

import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar sidebar={props.state.sidebar} />
      <div className="appWrapperContent">
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Profile
                  profilePage={props.state.profilePage}
									dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
									dialogsPage={props.state.dialogsPage}
									dispatch={props.dispatch}
									/>
								}
            />
            <Route path="/news/" element={<News />} />
            <Route path="/music/" element={<Music />} />
            <Route path="/settings/" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;

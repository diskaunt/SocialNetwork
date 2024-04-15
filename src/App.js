import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsComtainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar sidebar={props.store.getState().sidebar} />
      <div className="appWrapperContent">
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Profile
                  store={props.store}
                />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <DialogsContainer
									store={props.store}
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

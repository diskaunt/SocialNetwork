import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsComtainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <div className="appWrapperContent">
        <Routes>
          <Route path="/" >
            <Route path="/profile/" index element={<Profile />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news/" element={<News />} />
            <Route path="/music/" element={<Music />} />
            <Route path="/settings/" element={<Settings />} />
            <Route path="/users/" element={<UsersContainer />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;

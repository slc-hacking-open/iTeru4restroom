import React from "react";

import Header from "./containers/header";
import SideMenu from "./containers/side-menu";
import Floors from "./containers/floors";
import Message from "./containers/message";
import Overlay from "./containers/overlay";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Message />
      <div className="Main">
        <Floors />
        <SideMenu />
      </div>
      <Overlay />
    </div>
  );
};

export default App;

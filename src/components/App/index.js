import React from "react";
import "./index.css";

import Header from "./../Header";
import Goods from "../Goods";
import Footer from "../Footer";
import Nav from "../Nav";

class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        <div className="content">
          <Header />
          <Goods />
        </div>
        <Nav />
        <Footer>
          © Copyright 2017. Big Shop by Victor Themes
        </Footer>
      </React.Fragment>
    )
  }
}

export default App;

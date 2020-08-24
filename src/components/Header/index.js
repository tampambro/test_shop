import React from "react";
import "./index.css";
import Button from "../Button";
import SearchPanale from "../SearchPanel";


class Header extends React.Component {
  render() {
    return (
        <header>
          <div id="gradient"></div>
          <h3>Big Shop</h3>
          <Button
            classN="actionButton"
          >
            <span>
              Details
            </span>
          </Button>
          <SearchPanale />
          <div className="forHeader">
            <h1>
              <span>Summer</span><br />
              Colection
            </h1>
            <h2>
              <span>25%</span> OFF
            </h2>
          </div>
        </header>
    )
  }
}

export default Header;

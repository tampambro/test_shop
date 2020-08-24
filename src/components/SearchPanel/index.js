import React from "react";
import "./index.css";

class SearchPanale extends React.Component {

  render() {

    return (
      <div className="search">
        <img src="./img/svg/magnifier.svg" />
        <input type="search" placeholder="Search"></input>
        <select name="select" value="Collection">
          <optgroup label="Collection">
            <option hidden selected>Collection</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </optgroup>
        </select>
        <img src="./img/png/arrow.png" />
      </div>
    )
  }
}

export default SearchPanale;

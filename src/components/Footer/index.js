import React from "react";
import "./index.css";

class Footer extends React.Component {

  render() {
    const {
      children
    } = this.props;

    return (
      <footer>
        {children}
      </footer>
    )
  }
}

export default Footer;

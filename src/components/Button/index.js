import React from "react";
import "./index.css";

class Button extends React.Component {
  render() {

    const {
      children,
      classN
    } = this.props;

    return (
      <div className={classN}>
        {children}
      </div>
    )
  }
};

export default Button;

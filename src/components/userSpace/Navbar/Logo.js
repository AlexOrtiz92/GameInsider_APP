import React, { Fragment } from "react";
import PropTypes from "prop-types";

class Logo extends React.Component {
  render() {
    return (
      <div className="nav2">
        <img src="images/joypad.svg" alt="" width="60" className="logo" />
        <h1 id="title">Game Insiders</h1>
      </div>
    );
  }
}
export default Logo;

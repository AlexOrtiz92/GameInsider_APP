import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import MyGamesButt from "./MyGamesButt";
import CapturButt from "./CapturButt";
import AllGamesButt from "./AllGamesButt";
import EndButt from "./EndButt";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <nav className="nav1">
          <Logo />
          <div className="nav3">
            <MyGamesButt />
            <CapturButt />
            <AllGamesButt />
            <EndButt />
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;

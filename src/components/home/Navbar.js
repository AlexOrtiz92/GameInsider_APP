import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Login from "./Login";
import Register from "./Register";

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <nav className="nav1">
          <div className="nav2">
            <img src="images/joypad.svg" alt="" width="60" className="logo" />
            <h1 id="title">Game Insiders</h1>
          </div>
          {this.props.signIn ? <Login /> : <Register _handleClick={this.props._handleClick} />}
        </nav>
      </React.Fragment>
    );
  }
}


Navbar.propTypes = {
  signIn: PropTypes.bool,
  _handleClick: PropTypes.func,
}
export default Navbar;

import React, { Fragment } from "react";
import Navbar from "./Navbar";
import FormHome from "./FormHome";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signIn: false,
    };
  }

  _handleClick = () => {
    this.setState({ signIn: !this.state.signIn });
  };

  render() {
    return (
      <Fragment>
        <Navbar signIn={this.state.signIn} _handleClick={this._handleClick} />
        <FormHome signIn={this.state.signIn} _handleClick={this._handleClick} />
      </Fragment>
    );
  }
}

export default Home;

import React, { Fragment } from "react";
import Navbar from "./Navbar/Navbar";
import MisJuegos from "./MisJuegos/MisJuegos";

class UserSpace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <MisJuegos />
      </Fragment>
    );
  }
}

export default UserSpace;

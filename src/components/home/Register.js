import React, { Fragment } from "react";

class Register extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="">
        <button className="buttonLogin" onClick={this.props._handleClick}>Inicia Sesión</button>
      </div>
    );
  }
}

export default Register;

import React, { Fragment } from "react";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.password = React.createRef();
    this.state = {
      nickname: "",
      email: "",
    };
  }
  _handleNickname = (event) => {
    this.setState({ nickname: event.target.value });
  };

  _handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  _Register = () => {
    this.props._handleRegister(
      this.state.nickname,
      this.state.email,
      this.password.current.value
    );
  };
  render() {
    return (
      <div className="loginBox">
        <div className="empezar">
          <p>Empezar!</p>
        </div>
        <div className="login">
          <form className="form" action="">
            <div className="contain">
              <input
                className="user"
                type="user"
                placeholder="user"
                onChange={this._handleNickname}
              />
            </div>
            <div className="contain">
              <input
                className="email"
                type="email"
                placeholder="email"
                onChange={this._handleEmail}
              />
            </div>
            <div className="contain">
              <input
                className="password"
                type="password"
                placeholder="password"
                ref={this.password}
              />
            </div>
            <button
              className="buttonLog"
              type="button"
              onClick={this._Register}
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;

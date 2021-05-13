import React, { Fragment } from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.password = React.createRef();
    this.state = {
      email: "",
    };
  }

  _handleUser = (event) => {
    this.setState({ email: event.target.value });
  };

  _Login = () => {
    this.props._handleLogin(this.state.email, this.password.current.value);
  };

  render() {
    return (
      <div className="signinBox">
        <div className="empezar">
          <p>Iniciar Sesión</p>
        </div>
        <div className="signin">
          <form className="form" action="">
            <div className="contain">
              <input
                className="user"
                type="user"
                placeholder="user"
                onChange={this._handleUser}
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
            <button className="buttonSign" type="button" onClick={this._Login}>
              Adelante!
            </button>
            <small className="small">
              <p>Todavia no tienes usuario?</p>
              <button
                className="crearUser"
                type="button"
                onClick={this.props._handleClick}
              >
                Crealo!
              </button>
            </small>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;

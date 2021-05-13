import React, { Fragment } from "react";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class FormHome extends React.Component {
  constructor(props) {
    super(props);
  }

  _handleLogin = (email, psw) => {
    const opts = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: psw,
      }),
    };
    const url = "http://127.0.0.1:5678/api/users/login";

    fetch(url, opts)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("done!");
        return window.location.replace("http://127.0.0.1:1234/userSpace");
      });
  };

  _handleRegister = (nickname, email, psw) => {
    const opts = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        nickname: nickname,
        email: email,
        password: psw,
      }),
    };
    const url = "http://127.0.0.1:5678/api/users/register";

    fetch(url, opts)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("done!");
        return window.location.replace("http://127.0.0.1:1234/userSpace");
      });
  };

  render() {
    return (
      <Fragment>
        <section>
          <div className="section1">
            {this.props.signIn ? (
              <LoginForm
                _handleClick={this.props._handleClick}
                _handleLogin={this._handleLogin}
              />
            ) : (
              <RegisterForm _handleRegister={this._handleRegister} />
            )}
          </div>
        </section>
      </Fragment>
    );
  }
}

FormHome.propTypes = {
  signIn: PropTypes.bool,
  _handleClick: PropTypes.func,
};

export default FormHome;

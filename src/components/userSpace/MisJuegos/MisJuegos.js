import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Futuro from "./Futuro";
import Presente from "./Presente";
import Pasado from "./Pasado";

class MisJuegos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <Futuro />
          <Presente />
          <Pasado />
        </section>
      </Fragment>
    );
  }
}

export default MisJuegos;

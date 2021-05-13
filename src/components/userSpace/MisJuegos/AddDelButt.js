import React, { Fragment } from "react";
import PropTypes from "prop-types";

class AddDelButt extends React.Component {
  render() {
    return (
      <div className="add-del">
        <button className="add">
          <span className="sign">+</span>
        </button>
        <button className="del">
          <span className="sign">-</span>
        </button>
      </div>
    );
  }
}
export default AddDelButt;

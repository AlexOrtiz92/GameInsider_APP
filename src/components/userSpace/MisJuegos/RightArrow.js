import React, { Fragment } from "react";
import PropTypes from "prop-types";

class RightArrow extends React.Component {
  render() {
    return (
      <div className="rightArrow">
        <button className="right">
          <img src="../images/next.svg" alt="" width="40" />
        </button>
      </div>
    );
  }
}
export default RightArrow;

import React, { Fragment } from "react";
import PropTypes from "prop-types";

class LefArrow extends React.Component {
  render() {
    return (
      <div className="leftArrow">
        <button className="left">
          <img src="../images/next.svg" alt="" width="40" />
        </button>
      </div>
    );
  }
}
export default LefArrow;

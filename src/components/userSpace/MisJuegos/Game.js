import React, { Fragment } from "react";
import PropTypes from "prop-types";

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gameData: this.props.game
    }

  }
  render() {
    const { image, title } = this.state.gameData
    return (
      <div className="gamebox">
        <img
          className={this.props.img}
          src={image}
          alt={title}
          title=""
        />
        <div className="p">
          <span>{title}</span>
        </div>
      </div>
    );
  }
}
export default Game;

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Game from "./Game"

class GameBox extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={this.props.time}>
        {this.props.videogames != null ? (this.props.videogames.listado.map((game, i) => {
          return <Game img={this.props.img} key={`game-${i}`} game={game} />
        })) : (
          <div>
            <h2>Cargando...</h2>
          </div>
        )}
      </div>
    );
  }
}
export default GameBox;

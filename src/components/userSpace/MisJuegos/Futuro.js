import React, { Fragment } from "react";
import PropTypes from "prop-types";
import LeftArrow from "./LeftArrow"
import RightArrow from "./RightArrow"
import AddDelButt from "./AddDelButt"
import GameBox from "./GameBox"

class Futuro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  componentDidMount() {
    const nickname = "ales"

    const opts = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ time: "future" })
    }

    const url = `http://127.0.0.1:5678/api/gamelist/${nickname}`
    fetch(url, opts).then((response) => {
      return response.json()
    }).then((data) => {
      return this.setState({ data: data })
    }).catch((err) => {
      console.error(err)
    })

  }

  render() {
    return (
      <Fragment>
        <div className="bigCont">
          <div className="container">
            <p className="label">Mis planes</p>
            <div className="slidesCont">
              <LeftArrow />
              <GameBox time="future_list" img="future-img" videogames={this.state.data} />
              <RightArrow />
            </div>
          </div>
          <AddDelButt />
        </div>
      </Fragment>
    );
  }
}

export default Futuro;

import React, { Component } from "react"
import "./card.module.scss"

class Card extends Component {
  render() {
    return (
      <>
        <div className="card">
          { this.props.children }
        </div>
      </>
    )
  }
}

export default Card
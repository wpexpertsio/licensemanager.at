import React from "react"
import "./heading.scss"

class Heading extends React.Component {
  render() {
    return (
      <h1 className={"heading"} style={ this.props.style }>{ this.props.children }</h1>
    )
  }
}

export default Heading

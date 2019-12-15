import React, { Component } from "react"
import styles from "./heading.module.scss"

class Heading extends Component {
  render() {
    return (
      <h1 className={ styles.heading } style={ this.props.style }>{ this.props.children }</h1>
    )
  }
}

export default Heading
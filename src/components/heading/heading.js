import React, { Component } from "react"
import styles from "./heading.module.scss"

class Heading extends Component {
  render() {
    return (
      <h1 className={ styles.heading }>{ this.props.children }</h1>
    )
  }
}

export default Heading
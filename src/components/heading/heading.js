import React from "react"
import styles from "./heading.module.scss"

class Heading extends React.Component {
  render() {
    return (
      <h1 className={ styles.heading } style={ this.props.style }>{ this.props.children }</h1>
    )
  }
}

export default Heading
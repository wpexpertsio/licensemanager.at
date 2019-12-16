import React from "react"
import styles from "./primary-button.module.scss"
import { Link } from "gatsby"

class PrimaryButton extends React.Component {
  render() {
    let button

    if (this.props.to) {
      button = <Link className={ styles.primaryButton } to={ this.props.to } style={ this.props.style }>{ this.props.children }</Link>
    }

    if (this.props.href) {
      button = <a className={ styles.primaryButton } href={ this.props.href } rel="noopener noreferrer" style={ this.props.style }>{ this.props.children }</a>
    }

    return (
      <>
        { button }
      </>
    )
  }
}

export default PrimaryButton
import React from "react"
import "./doc-list.module.scss"

export default class DocList extends React.Component {
  render() {
    return (
      <div className="doc-list">
        { this.props.children }
      </div>
    )
  }
}
import React from "react"
import "./layout.module.scss"
import Navigation from "../navigation/navigation"
import Footer from "../footer/footer"

class Layout extends React.Component {
  render() {
    return (
      <>
        <div id="main-content">
          <Navigation/>
          { this.props.children }
        </div>
        <Footer/>
      </>
    )
  }
}

export default Layout

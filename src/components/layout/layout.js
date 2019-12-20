import React from "react"
import "./layout.module.scss"
import Navigation from "../navigation/navigation"
import Header from "../header/header"
import Footer from "../footer/footer"

class Layout extends React.Component {
  render() {
    return (
      <div id="main-content">
        <Navigation/>
        <Header/>
        <div id="inner-content">
          { this.props.children }
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Layout

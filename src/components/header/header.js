import React from "react"
import "./header.module.scss"
import logo from "../../images/docs_header.png"

class Header extends React.Component {
  render() {
    return (
      <header style={{ backgroundImage: `url(${logo})` }}>
        <div>
          <h1>License Manager for WooCommerce</h1>
          <p>Easily sell and manage software license keys through your shop</p>
        </div>
      </header>
    )
  }
}

export default Header
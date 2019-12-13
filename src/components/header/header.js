import React from "react"
import "./header.module.scss"
import logo from "../../images/docs_header.png"

export default () => (
  <header style={{ backgroundImage: "url(" + logo + ")" }}>
    <div>
      <h1>License Manager for WooCommerce</h1>
      <p>Easily sell and manage software license keys through your shop</p>
    </div>
  </header>
)
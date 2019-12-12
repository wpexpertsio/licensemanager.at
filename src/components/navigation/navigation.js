import React from "react"
import "./navigation.module.scss"
import { Link } from "gatsby"

export default ({ children }) => (
  <nav>
    <div>
      <a href="/">
        <img src="https://licensemanager.at/wp-content/uploads/2019/09/logo-horizontal.png" alt="License Manager for WooCommerce"/>
      </a>
    </div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
      <li><Link to="/docs/">Docs</Link></li>
      <li><Link to="/donate/">Donate</Link></li>
    </ul>
  </nav>
)
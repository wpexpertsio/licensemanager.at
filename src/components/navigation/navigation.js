import React from "react"
import styles from "./navigation.module.scss"
import logo from "../../images/logo_horizontal.png"
import { Link } from "gatsby"

export default () => (
  <nav>
    <div className={ styles.logo }>
      <a href="/">
        <img src={ logo } alt="License Manager for WooCommerce"/>
      </a>
    </div>
    <div className={ styles.links }>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/">About</Link></li>
        <li><Link to="/contact/">Contact</Link></li>
        <li><Link to="/docs/">Docs</Link></li>
        <li><Link to="/donate/">Donate</Link></li>
      </ul>
    </div>
  </nav>
)
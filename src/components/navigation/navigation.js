import React from "react"
import "./navigation.scss"
import logo from "../../images/logo_horizontal.webp"
import { Link } from "gatsby"

class Navigation extends React.Component {
  render() {
    return (
      <nav className={"top-navigation"}>
        <div className={"container"}>
          <div className={"logo"}>
            <Link to={"/"}>
              <img src={ logo } alt="License Manager for WooCommerce"/>
            </Link>
          </div>

          <div className="links">
            <ul>
              <li><Link activeClassName="active" to="/">Home</Link></li>
              <li><Link activeClassName="active" to="/blog/">Blog</Link></li>
              <li><Link activeClassName="active" to="/contact/">Contact</Link></li>
              <li><Link activeClassName="active" to="/docs/">Docs</Link></li>
              <li><Link activeClassName="active" to="/donate/">Donate</Link></li>
            </ul>
          </div>

        </div>
      </nav>
    )
  }
}

export default Navigation

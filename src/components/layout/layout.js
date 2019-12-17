import React from "react"
import "./layout.module.scss"
import Navigation from "../navigation/navigation"
import Header from "../header/header"
import Footer from "../footer/footer"
import { Link } from "gatsby"
import { push as Menu } from "react-burger-menu"

class Layout extends React.Component {
  styles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '24px',
      height: '20px',
      right: '36px',
      top: '15px',
      zIndex: 999999
    },
    bmBurgerBars: {
      background: '#8F1948',
      borderRadius: '3px'
    },
    bmBurgerBarsHover: {
      background: '#521129'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad !important',
      padding: '0.8em'
    },
    bmItem: {
      display: 'block',
      color: "#b8b7ad",
      textDecoration: "none",
      padding: ".25em 0"
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  burgerMenu

  componentDidMount() {
    if (window !== undefined && window.innerWidth < 768) {
      this.burgerMenu = (
        <Menu pageWrapId={ "main-content" } styles={ this.styles }>
          <Link className="menu-item" to="/">Home</Link>
          <Link className="menu-item" to="/blog/">Blog</Link>
          <Link className="menu-item" to="/contact/">Contact</Link>
          <Link className="menu-item" to="/docs/">Docs</Link>
          <Link className="menu-item" to="/donate/">Donate</Link>
        </Menu>
      )
    }
  }

  render() {
    return (
      <>
        { this.burgerMenu }
        <div id="main-content">
          <Navigation/>
          <Header/>
          <div id="inner-content">
            { this.props.children }
          </div>
          <Footer/>
        </div>
      </>
    )
  }
}

export default Layout

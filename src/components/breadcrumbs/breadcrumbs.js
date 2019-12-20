import React from "react"
import "./breadcrumbs.module.scss"
import { Link } from "gatsby"

class Breadcrumbs extends React.Component {
  getRouteName(route) {
    // Edge cases
    if (route === "tutorials-how-to") {
      return "Tutorials & How-To"
    }

    // Strings which contain underlines
    if (route.indexOf("_") !== -1) {
      return route
    }

    // Strings which contain no dashes
    if (route.indexOf("-") === -1) {
      return route.charAt(0).toUpperCase() + route.slice(1)
    }

    // Strings which do contain dashes
    else {
      let result = ""
      const routeArray = route.split("-");

      routeArray.forEach((slugPiece, i) => {

        if (slugPiece === "woocommerce") {
          slugPiece = "wooCommerce"
        }

        result += slugPiece.charAt(0).toUpperCase() + slugPiece.slice(1)
        result += " "
      })
      return result
    }
  }

  render() {
    const pathname = this.props.pathname
    const urlParams = pathname.split("/")
    let breadcrumbs = []
    let url = ""

    breadcrumbs.push(
      <span key="crumb-home" className="crumb">
        <Link to="/"><i className="fas fa-home"/> Home</Link>
      </span>
    )

    urlParams.forEach(param => {
      if (param !== "") {
        breadcrumbs.push(
            <span key={ "crumb-" + url + param } className="crumb">&nbsp;|&nbsp; <Link to={"/" + url + param + "/"}>{ this.getRouteName(param) }</Link></span>
        )
        url += param + "/"
      }
    })

    return (
      <>
        { breadcrumbs }
      </>
    )
  }
}

export default Breadcrumbs
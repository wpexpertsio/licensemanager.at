import React from "react"
import "./breadcrumbs.module.scss"
import { Link } from "gatsby"

class Breadcrumbs extends React.Component {
  getRouteName(route) {
    // Edge cases
    if (route === "tutorials-how-to") {
      return "Tutorials & How-To"
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
      <>
        <Link to="/"><i className="fas fa-home"/> Home</Link>
      </>
    )

    urlParams.forEach(param => {
      if (param !== "") {
        breadcrumbs.push(
          <>
            {/*&nbsp;|&nbsp;<Link to={"/" + url + param + "/"}>{ param.charAt(0).toUpperCase() + param.slice(1) }</Link>*/}
            &nbsp;|&nbsp;<Link to={"/" + url + param + "/"}>{ this.getRouteName(param) }</Link>
          </>
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
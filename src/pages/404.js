import React from "react"
import "./404.scss"
import Layout from "../components/layout/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

class NotFound extends React.Component {
  render() {
    return(
      <Layout>
        <Seo title="404 - Not found" description="Easily sell and manage your licenses through WooCommerce" />

        <div className={"page-404"}>
          <h1>404</h1>
          <p>Uh-oh, I think we're lost. Why don't we head <Link to="/">back home</Link>?</p>
        </div>
      </Layout>
    )
  }
}

export default NotFound;

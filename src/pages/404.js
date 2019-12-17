import React from "react"
import Layout from "../components/layout/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="404 - Not found" description="Easily sell and manage your licenses through WooCommerce" />
    <div>
      <h1>404</h1>
      <p>I'm sorry, but I couldn't quite find that. <Link to="/">Go back</Link>.</p>
    </div>
  </Layout>
)

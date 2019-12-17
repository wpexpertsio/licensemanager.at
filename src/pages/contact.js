import React from "react"
import Layout from "../components/layout/layout"
import Heading from "../components/heading/heading"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Contact" description="Easily sell and manage your licenses through WooCommerce" />

    <div className="row">
      <div className="col-12">
        <Heading>Contact us!</Heading>
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        <p style={{ textAlign: "center" }}>If you have a question you can reach the support via the following channels:</p>
        <p style={{ textAlign: "center" }}>
          <a href="https://wordpress.org/support/plugin/license-manager-for-woocommerce/" target="_blank" rel="noopener noreferrer"><i className="fab fa-wordpress"/> WordPress Support Forum</a>
          <br/>
          <a href="mailto:support@licensemanager.at"><i className="fas fa-envelope"/> support@licensemanager.at</a>
        </p>
      </div>
    </div>

  </Layout>
)
import React from "react"
import Layout from "../components/layout/layout"
import Heading from "../components/heading/heading"
import payPalLogo from "../images/de-pp-logo-200px.png"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Blog" description="Easily sell and manage your licenses through WooCommerce" />
    <div className="row">
      <div className="col-12">
        <Heading>Thank you for your support!</Heading>
      </div>
      <div className="col-12">
        <p>The License Manager for WooCommerce is and will remain a 100% free plugin. If you however wish to help with
          the operating costs you can do so via the PayPal link below. You should also know that <strong>half of the
          proceeds will be forwarded to <a href="https://www.sos-kinderdorf.at/" target="_blank" rel="noopener noreferrer">SOS Children’s Village</a></strong>,
          an organization dedicated to helping children in need.</p>
        <p style={{ textAlign: "center" }}>You can send your contribution by clicking the <strong>PayPal</strong> logo below.</p>
      </div>
      <div className="col-12" style={{ textAlign: "center" }}>
        <a href="https://www.paypal.me/drazenbebic" target="_blank" rel="noopener noreferrer">
          <img src={ payPalLogo } alt="PayPal"/>
        </a>
      </div>
      <div className="col-12">
        <p  style={{ textAlign: "center" }}>
          <strong>Thank you very much.</strong><br/>
          <em>Dražen Bebić</em>
        </p>
      </div>
    </div>
  </Layout>
)
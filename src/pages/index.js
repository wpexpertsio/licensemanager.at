import React from "react"
import Layout from "../components/layout/layout"
import PrimaryButton from "../components/primary-button/primary-button"
import Heading from "../components/heading/heading"
import Card from "../components/card/card"
import { Link } from "gatsby"
import demoVideo from "../videos/demo.webm"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Home" description="Easily sell and manage your licenses through WooCommerce" />
    <div className="row">
      <div className="col-3">
        <PrimaryButton style={{ marginBottom: "1em" }} href="https://downloads.wordpress.org/plugin/license-manager-for-woocommerce.zip"><i
          className="fas fa-download"/>Download</PrimaryButton>
        <PrimaryButton style={{ marginBottom: "1em" }} to="/docs/"><i className="fas fa-book"/>Documentation</PrimaryButton>
        <PrimaryButton style={{ marginBottom: "1em" }} to="/donate/"><i className="fas fa-donate"/>Donate</PrimaryButton>
        <PrimaryButton style={{ marginBottom: "1em" }} to="/contact/"><i className="fas fa-bug"/>Report a bug</PrimaryButton>
      </div>
      <div className="col-9">
        <p>The <strong>License Manager for WooCommerce</strong> WordPress/WooCommerce plugin allows you to easily sell
          and manage your software license keys. The plugin also extends the WordPress REST API, allowing you to
          perform actions such as license key activation or deactivation remotely, turning your WordPress instance
          into a licensing server</p>
        <p>The plugin is, and always will be, a 100% free. If you like the plugin please <a
          href="https://wordpress.org/support/plugin/license-manager-for-woocommerce/reviews/#new-post"
          target="_blank" rel="noopener noreferrer">rate it on WordPress.org</a>. You can also support development
          by <Link to="/donate/">donating</Link>.</p>
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        <video controls="" autoPlay={ true } muted={ true }>
          <source type="video/webm" src={ demoVideo } />
        </video>
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        <Heading>Feature overview</Heading>
      </div>
    </div>

    <div className="row">
      <div className="col-6">
        <Card>
          <div className="card-icon">
            <i className="fas fa-file-import"/>
          </div>
          <div className="card-text">
            <h3>Import your license keys</h3>
            <p>Add and import your license keys to your WooCommerce shop. You can add them one by one, or in bulk! Just
              upload your CSV/TXT file and be done with it. Sell your added keys, use a generator, or… do both!</p>
          </div>
        </Card>
      </div>
      <div className="col-6">
        <Card>
          <div className="card-icon">
            <i className="fas fa-cog" />
          </div>
          <div className="card-text">
            <h3>Generate license keys</h3>
            <p>Do you need to generate license keys on-the-go with each new order? No problem! Enable the option and let
              the plugin do the work for you. Create highly customizable generators, so that your license key looks just
              the way it you need it to.</p>
          </div>
        </Card>
      </div>
      <div className="col-6">
        <Card>
          <div className="card-icon">
            <i className="fas fa-truck"/>
          </div>
          <div className="card-text">
            <h3>Automatic delivery</h3>
            <p>Automatically deliver your license keys to the customer by simply enabling the feature inside the settings
              page. The individual license keys will be sent out with the standard WooCommerce “Order complete” email.</p>
          </div>
        </Card>
      </div>
      <div className="col-6">
        <Card>
          <div className="card-icon">
            <i className="fas fa-lock"/>
          </div>
          <div className="card-text">
            <h3>Encryption</h3>
            <p>Your license keys are always stored in an encrypted fashion inside the database. This prevents anyone who
              might get access to your database from using your customer’s license keys.</p>
          </div>
        </Card>
      </div>
      <div className="col-6">
        <Card>
          <div className="card-icon">
            <i className="fas fa-store"/>
          </div>
          <div className="card-text">
            <h3>WooCommerce Integration</h3>
            <p>The License Manager plugin is built for WooCommerce, thus seamlessly integrates into WooCommerce
              functionality. Offering licensing options for both simple and variable products, adding new and
              customizable emails, new order actions, and much more.</p>
          </div>
        </Card>
      </div>
    </div>
  </Layout>
)

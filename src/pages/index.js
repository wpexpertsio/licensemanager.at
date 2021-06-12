import React from "react"
import Layout from "../components/layout/layout"
import PrimaryButton from "../components/primary-button/primary-button"
import Heading from "../components/heading/heading"
import Card from "../components/card/card"
import { Link } from "gatsby"
import demoVideo from "../videos/demo.webm"
import Seo from "../components/seo"

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="The License Manager for WooCommerce WordPress Plugin allows you to easily sell and manage your licenses through WooCommerce." />

        <div className="row">

          <div className="col-3">
            <PrimaryButton style={{ marginBottom: "1em" }} href="https://downloads.wordpress.org/plugin/license-manager-for-woocommerce.2.2.3.zip">
              <i className="fas fa-download"/>
              Download
            </PrimaryButton>
            <PrimaryButton style={{ marginBottom: "1em" }} to="/docs/">
              <i className="fas fa-book"/>
              Documentation
            </PrimaryButton>
            <PrimaryButton style={{ marginBottom: "1em" }} to="/donate/">
              <i className="fas fa-donate"/>
              Donate
            </PrimaryButton>
            <PrimaryButton style={{ marginBottom: "1em" }} to="/contact/">
              <i className="fas fa-bug"/>
              Report a bug
            </PrimaryButton>
          </div>

          <div className="col-9">
            <p>The <strong>License Manager for WooCommerce</strong> WordPress/WooCommerce plugin allows you to easily sell
              and manage your software licenses. The plugin also extends the WordPress REST API, allowing you to
              perform actions such as license activation or deactivation remotely, turning your WordPress instance
              into a licensing server</p>
            <p>The plugin is, and always will be, a 100% free. If you like the plugin please <a
              href="https://wordpress.org/support/plugin/license-manager-for-woocommerce/reviews/#new-post"
              target="_blank" rel="noopener noreferrer">rate it on WordPress.org</a>. You can also support development
              by <Link to="/donate/">donating</Link>.</p>
          </div>

        </div>

        <div className="row">
          <div className="col-12">
            <video controls="" autoPlay={ true } muted={ true } style={{ width: "100%" }}>
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
                <i className="fas fa-store"/>
              </div>
              <div className="card-text">
                <h3>WooCommerce Integration</h3>
                <p>The License Manager plugin is <u>built for WooCommerce</u>, seamlessly integrating into its workflows
                  and functionality. Supporting licensing options for both simple and variable products, adding new and
                  customizable emails, new order actions, and much more.</p>
              </div>
            </Card>
          </div>

          <div className="col-6">
            <Card>
              <div className="card-icon">
                <i className="fas fa-sync"/>
              </div>
              <div className="card-text">
                <h3>WooCommerce Subscriptions Integration</h3>
                <p>When using <u>WooCommerce Subscriptions</u>, our plugin will help you with your workflow by
                  automatically extending existing licenses. Depending on your preference, you can extend licenses
                  using the subscription interval, a custom interval - or issue a new license altogether.</p>
              </div>
            </Card>
          </div>

          <div className="col-6">
            <Card>
              <div className="card-icon">
                <i className="fas fa-cloud"/>
              </div>
              <div className="card-text">
                <h3>REST API</h3>
                <p>Activate, deactivate, and validate licenses using the plugin's new endpoints. You can further
                  customize these requests by implementing your own validation business logic. Head over to the developer
                  documentation to get a better overview of what our plugin can do for you.</p>
              </div>
            </Card>
          </div>

          <div className="col-6">
            <Card>
              <div className="card-icon">
                <i className="fas fa-file-import"/>
              </div>
              <div className="card-text">
                <h3>Import your licenses</h3>
                <p>Already have your own licenses which you would like to use? No Problem! Simply import your licenses
                  to your shop and let our plugin do the rest. Upload your CSV/TXT file and be done with it.
                  Sell your added keys, use a generator, or… do both!</p>
              </div>
            </Card>
          </div>

          <div className="col-6">
            <Card>
              <div className="card-icon">
                <i className="fas fa-cog" />
              </div>
              <div className="card-text">
                <h3>Generate licenses</h3>
                <p>Do you need to generate licenses on-the-go with each new order? No problem! Enable the option and let
                  the plugin do the work for you. Create highly customizable generators, so that your license looks just
                  the way you need it.</p>
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
                <p>Automatically deliver your licenses to the customer by simply enabling the feature inside the settings
                  page. The individual licenses will be sent out with the standard WooCommerce “Order complete” email.</p>
              </div>
            </Card>
          </div>

          <div className="col-6">
            <Card>
              <div className="card-icon">
                <i className="fas fa-box-open"/>
              </div>
              <div className="card-text">
                <h3>Stock management</h3>
                <p>Allow the plugin to automatically take care of updating your product stock each time a license is added,
                  sold, activated, deactivated, and deleted.</p>
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
                <p>Your licenses are always encrypted before being stored inside the database. This prevents anyone who
                  might get access to your database from using your customer’s licenses.</p>
              </div>
            </Card>
          </div>

        </div>
      </Layout>
    )
  }
}

export default Index

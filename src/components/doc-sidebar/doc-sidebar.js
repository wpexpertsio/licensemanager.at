import React from "react"
import "./doc-sidebar.module.scss"
import { Link } from "gatsby"

export default class DocSidebar extends React.Component {
  tree

  initComponent() {
    const parentData = this.props.parentData
    const pathname   = parentData.location.pathname
    const urlParams  = pathname.split("/")

    let sections = {
      ["handbook"]: {
        ["installation"]: "",
        ["setup"]: "",
        ["plugin-settings"]: "",
        ["license-keys"]: "",
        ["generators"]: "",
        ["woocommerce-products"]: "",
        ["woocommerce-orders"]: ""
      },
      ["tutorials-how-to"]: {
        ["additional-rest-api-validation"]: "",
        ["modifying-the-rest-api-response"]: ""
      },
      ["rest-api"]: {
        ["requirements"]: "",
        ["generate-api-keys"]: "",
        ["test-if-the-api-is-working"]: "",
        ["developer-documentation"]: "",
        ["libraries"]: ""
      },
      ["internal-api-docs"]: {
        ["database-structure"]: "",
        ["filters-reference"]: "",
        ["functions-reference"]: "",
        ["actions-reference"]: ""
      },
      ["codex"]: {
        ["theming"]: ""
      }
    }

    // Set the active section/subsection
    Object.keys(sections).map(section => {
      Object.keys(sections[section]).map(subsection => {
        if (urlParams[3] === subsection) {
          sections[section][subsection] = "active"
        }
      })
    })

    switch(urlParams[2]) {
      case "handbook":
        this.tree = (
          <>
            <h2>Handbook</h2>
            <ul>
              {/* INSTALLATION */}
              <li key="/docs/handbook/installation/" className={ sections["handbook"]["installation"] }>
                <Link activeClassName="active" to="/docs/handbook/installation/">Installation</Link>
                <ul>
                  <li key="/docs/handbook/installation/manual-installation/">
                    <Link activeClassName="active" to="/docs/handbook/installation/manual-installation/">Manual installation</Link>
                  </li>
                  <li key="/docs/handbook/installation/wordpress-dashboard/">
                    <Link activeClassName="active" to="/docs/handbook/installation/wordpress-dashboard/">WordPress Dashboard</Link>
                  </li>
                </ul>
              </li>
              {/* SETUP */}
              <li key="/docs/handbook/setup/" className={ sections["handbook"]["setup"] }>
                <Link activeClassName="active" to="/docs/handbook/setup/">Setup</Link>
                <ul>
                  <li key="/docs/handbook/setup/cryptographic-secrets/">
                    <Link activeClassName="active" to="/docs/handbook/setup/cryptographic-secrets/">Cryptographic Secrets</Link>
                  </li>
                  <li key="/docs/handbook/setup/security/">
                    <Link activeClassName="active" to="/docs/handbook/setup/security/">Security</Link>
                  </li>
                </ul>
              </li>
              {/* PLUGIN SETTINGS */}
              <li key="/docs/handbook/plugin-settings/" className={ sections["handbook"]["plugin-settings"] }>
                <Link activeClassName="active" to="/docs/handbook/plugin-settings/">Plugin Settings</Link>
                <ul>
                  <li key="/docs/handbook/plugin-settings/general/">
                    <Link activeClassName="active" to="/docs/handbook/plugin-settings/general/">General</Link>
                  </li>
                  <li key="/docs/handbook/plugin-settings/rest-api-keys/">
                    <Link activeClassName="active" to="/docs/handbook/plugin-settings/rest-api-keys/">REST API keys</Link>
                  </li>
                </ul>
              </li>
              {/* LICENSE KEYS */}
              <li key="/docs/handbook/license-keys/" className={ sections["handbook"]["license-keys"] }>
                <Link activeClassName="active" to="/docs/handbook/license-keys/">License keys</Link>
                <ul>
                  <li key="/docs/handbook/license-keys/overview/">
                    <Link activeClassName="active" to="/docs/handbook/license-keys/overview/">Overview</Link>
                  </li>
                  <li key="/docs/handbook/license-keys/adding-license-keys/">
                    <Link activeClassName="active" to="/docs/handbook/license-keys/adding-license-keys/">Adding license keys</Link>
                  </li>
                  <li key="/docs/handbook/license-keys/editing-license-keys/">
                    <Link activeClassName="active" to="/docs/handbook/license-keys/editing-license-keys/">Editing license keys</Link>
                  </li>
                  <li key="/docs/handbook/license-keys/exporting-license-keys/">
                    <Link activeClassName="active" to="/docs/handbook/license-keys/exporting-license-keys/">Exporting license keys</Link>
                  </li>
                </ul>
              </li>
              {/* GENERATORS */}
              <li key="/docs/handbook/generators/" className={ sections["handbook"]["generators"] }>
                <Link activeClassName="active" to="/docs/handbook/generators/">Generators</Link>
                <ul>
                  <li key="/docs/handbook/generators/overview/">
                    <Link activeClassName="active" to="/docs/handbook/generators/overview/">Overview</Link>
                  </li>
                  <li key="/docs/handbook/generators/adding-generators/">
                    <Link activeClassName="active" to="/docs/handbook/generators/adding-generators/">Adding generators</Link>
                  </li>
                  <li key="/docs/handbook/generators/editing-generators/">
                    <Link activeClassName="active" to="/docs/handbook/generators/editing-generators/">Editing generators</Link>
                  </li>
                </ul>
              </li>
              {/* WOOCOMMERCE PRODUCTS */}
              <li key="/docs/handbook/woocommerce-products/" className={ sections["handbook"]["woocommerce-products"] }>
                <Link activeClassName="active" to="/docs/handbook/woocommerce-products/">WooCommerce Products</Link>
                <ul>
                  <li key="/docs/handbook/woocommerce-products/simple-product-options/">
                    <Link activeClassName="active" to="/docs/handbook/woocommerce-products/simple-product-options/">Simple product options</Link>
                  </li>
                  <li key="/docs/handbook/woocommerce-products/variable-product-options/">
                    <Link activeClassName="active" to="/docs/handbook/woocommerce-products/variable-product-options/">Variable product options</Link>
                  </li>
                </ul>
              </li>
              {/* WOOCOMMERCE ORDERS */}
              <li key="/docs/handbook/woocommerce-orders/" className={ sections["handbook"]["woocommerce-orders"] }>
                <Link activeClassName="active" to="/docs/handbook/woocommerce-orders/">WooCommerce Orders</Link>
                <ul>
                  <li key="/docs/handbook/woocommerce-orders/resend-license-keys/">
                    <Link activeClassName="active" to="/docs/handbook/woocommerce-orders/resend-license-keys/">Resend license keys</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </>
        )
        break
      case "tutorials-how-to":
        this.tree = (
          <>
            <h2>Tutorials & How-To</h2>
            <ul>
              <li key="/docs/tutorials-how-to/additional-rest-api-validation/" className={ sections["tutorials-how-to"]["additional-rest-api-validation"] }>
                <Link activeClassName="active" to="/docs/tutorials-how-to/additional-rest-api-validation/">Additional REST API Validation</Link>
              </li>
              <li key="/docs/tutorials-how-to/modifying-the-rest-api-response/" className={ sections["tutorials-how-to"]["modifying-the-rest-api-response"] }>
                <Link activeClassName="active" to="/docs/tutorials-how-to/modifying-the-rest-api-response/">Modifying the REST API Response</Link>
              </li>
            </ul>
          </>
        )
        break
      case "rest-api":
        this.tree = (
          <>
            <h2>REST API</h2>
            <ul>
              <li key="/docs/rest-api/requirements/" className={ sections["rest-api"]["requirements"] }>
                <Link activeClassName="active" to="/docs/rest-api/requirements/">Requirements</Link>
              </li>
              <li key="/docs/rest-api/generate-api-keys/" className={ sections["rest-api"]["generate-api-keys"] }>
                <Link activeClassName="active" to="/docs/rest-api/generate-api-keys/">Generate API keys</Link>
              </li>
              <li key="/docs/rest-api/test-if-the-api-is-working/" className={ sections["rest-api"]["test-if-the-api-is-working"] }>
                <Link activeClassName="active" to="/docs/rest-api/test-if-the-api-is-working/">Test if the API is working</Link>
              </li>
              {/* DEVELOPER DOCUMENTATION */}
              <li key="/docs/rest-api/developer-documentation/" className={ sections["rest-api"]["developer-documentation"] }>
                <Link activeClassName="active" to="/docs/rest-api/developer-documentation/">Developer Documentation</Link>
                <ul>
                  <li key="/docs/rest-api/developer-documentation/list-all-licenses/">
                    <Link activeClassName="active" to="/docs/rest-api/developer-documentation/list-all-licenses/">List all licenses</Link>
                  </li>
                  <li key="/docs/rest-api/developer-documentation/retrieve-a-license/">
                    <Link activeClassName="active" to="/docs/rest-api/developer-documentation/retrieve-a-license/">Retrieve a license</Link>
                  </li>
                  <li key="/docs/rest-api/developer-documentation/create-a-license/">
                    <Link activeClassName="active" to="/docs/rest-api/developer-documentation/create-a-license/">Create a license</Link>
                  </li>
                  <li key="/docs/rest-api/developer-documentation/update-a-license/">
                    <Link activeClassName="active" to="/docs/rest-api/developer-documentation/update-a-license/">Update a license</Link>
                  </li>
                  <li key="/docs/rest-api/developer-documentation/activate-a-license/">
                    <Link activeClassName="active" to="/docs/rest-api/developer-documentation/activate-a-license/">Activate a license</Link>
                  </li>
                  <li key="/docs/rest-api/developer-documentation/deactivate-a-license/">
                    <Link activeClassName="active" to="/docs/rest-api/developer-documentation/deactivate-a-license/">Deactivate a license</Link>
                  </li>
                  <li key="/docs/rest-api/developer-documentation/validate-a-license/">
                    <Link activeClassName="active" to="/docs/rest-api/developer-documentation/validate-a-license/">Validate a license</Link>
                  </li>
                  <li key="/docs/rest-api/developer-documentation/list-all-generators/">
                    <Link activeClassName="active" to="/docs/rest-api/developer-documentation/list-all-generators/">List all generators</Link>
                  </li>
                  <li key="/docs/rest-api/developer-documentation/retrieve-a-generator/">
                    <Link activeClassName="active" to="/docs/rest-api/developer-documentation/retrieve-a-generator/">Retrieve a generator</Link>
                  </li>
                  <li key="/docs/rest-api/developer-documentation/create-a-generator/">
                    <Link activeClassName="active" to="/docs/rest-api/developer-documentation/create-a-generator/">Create a generator</Link>
                  </li>
                  <li key="/docs/rest-api/developer-documentation/update-a-generator/">
                    <Link activeClassName="active" to="/docs/rest-api/developer-documentation/update-a-generator/">Update a generator</Link>
                  </li>
                </ul>
              </li>
              <li key="/docs/rest-api/libraries/" className={ sections["rest-api"]["libraries"] }>
                <Link activeClassName="active" to="/docs/rest-api/libraries/">Libraries</Link>
              </li>
            </ul>
          </>
        )
        break
      case "internal-api-docs":
        this.tree = (
          <>
            <h2>Internal API docs</h2>
            <ul>
              <li key="/docs/internal-api-docs/database-structure/" className={ sections["internal-api-docs"]["database-structure"] }>
                <Link activeClassName="active" to="/docs/internal-api-docs/database-structure/">Database Structure</Link>
              </li>
              <li key="/docs/internal-api-docs/filters-reference/" className={ sections["internal-api-docs"]["filters-reference"] }>
                <Link activeClassName="active" to="/docs/internal-api-docs/filters-reference/">Filters Reference</Link>
              </li>
              <li key="/docs/internal-api-docs/functions-reference/" className={ sections["internal-api-docs"]["functions-reference"] }>
                <Link activeClassName="active" to="/docs/internal-api-docs/functions-reference/">Functions Reference</Link>
              </li>
              <li key="/docs/internal-api-docs/actions-reference/" className={ sections["internal-api-docs"]["actions-reference"] }>
                <Link activeClassName="active" to="/docs/internal-api-docs/actions-reference/">Actions Reference</Link>
              </li>
            </ul>
          </>
        )
        break
      case "codex":
        this.tree = (
          <>
            <h2>Codex</h2>
            <ul>
              <li key="/docs/codex/theming/">
                <Link activeClassName="active" to="/docs/codex/theming/">Theming</Link>
              </li>
            </ul>
          </>
        )
        break
      default:
        this.tree = ""
        break;
    }
  }

  render() {
    this.initComponent()

    return (
      <div className="doc-sidebar">
        { this.tree }
      </div>
    )
  }
}
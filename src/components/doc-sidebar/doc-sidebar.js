import React from "react"
import "./doc-sidebar.module.scss"
import { Link } from "gatsby"

export default class DocSidebar extends React.Component {
  tree

  initComponent() {
    const parentData = this.props.parentData
    const pathname = parentData.location.pathname
    const urlParams = pathname.split("/")

    console.log(pathname)

    switch(urlParams[2]) {
      case "handbook":
        this.tree = (
          <>
            <h2>Handbook</h2>
            <ul>
              <li>
                <Link activeClassName="active" to="/docs/handbook/installation/">Installation</Link>
                <ul>
                  <li><Link activeClassName="active" to="/docs/handbook/installation/manual-installation/">Manual installation</Link></li>
                  <li><Link activeClassName="active" to="/docs/handbook/installation/wordpress-dashboard/">WordPress Dashboard</Link></li>
                </ul>
              </li>
              <li>
                <Link activeClassName="active" to="/docs/handbook/setup/">Setup</Link>
                <ul>
                  <li><Link activeClassName="active" to="/docs/handbook/setup/cryptographic-secrets/">Cryptographic Secrets</Link></li>
                  <li><Link activeClassName="active" to="/docs/handbook/setup/security/">Security</Link></li>
                </ul>
              </li>
              <li>
                <Link activeClassName="active" to="/docs/handbook/plugin-settings/">Plugin Settings</Link>
                <ul>
                  <li><Link activeClassName="active" to="/docs/handbook/plugin-settings/general/">General</Link></li>
                  <li><Link activeClassName="active" to="/docs/handbook/plugin-settings/rest-api-keys/">REST API keys</Link></li>
                </ul>
              </li>
              <li>
                <Link activeClassName="active" to="/docs/handbook/license-keys/">License keys</Link>
                <ul>
                  <li><Link activeClassName="active" to="/docs/handbook/license-keys/overview/">Overview</Link></li>
                  <li><Link activeClassName="active" to="/docs/handbook/license-keys/adding-license-keys/">Adding license keys</Link></li>
                  <li><Link activeClassName="active" to="/docs/handbook/license-keys/editing-license-keys/">Editing license keys</Link></li>
                  <li><Link activeClassName="active" to="/docs/handbook/license-keys/exporting-license-keys/">Exporting license keys</Link></li>
                </ul>
              </li>
              <li>
                <Link activeClassName="active" to="/docs/handbook/generators/">Generators</Link>
                <ul>
                  <li><Link activeClassName="active" to="/docs/handbook/generators/overview/">Overview</Link></li>
                  <li><Link activeClassName="active" to="/docs/handbook/generators/adding-generators/">Adding generators</Link></li>
                  <li><Link activeClassName="active" to="/docs/handbook/generators/editing-generators/">Editing generators</Link></li>
                </ul>
              </li>
              <li>
                <Link activeClassName="active" to="/docs/handbook/woocommerce-products/">WooCommerce Products</Link>
                <ul>
                  <li><Link activeClassName="active" to="/docs/handbook/woocommerce-products/simple-product-options/">Simple product options</Link></li>
                  <li><Link activeClassName="active" to="/docs/handbook/woocommerce-products/variable-product-options/">Variable product options</Link></li>
                </ul>
              </li>
              <li>
                <Link activeClassName="active" to="/docs/handbook/woocommerce-orders/">WooCommerce Orders</Link>
                <ul>
                  <li><Link activeClassName="active" to="/docs/handbook/woocommerce-orders/resend-license-keys/">Resend license keys</Link></li>
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
              <li><Link activeClassName="active" to="/docs/tutorials-how-to/additional-rest-api-validation/">Additional REST API Validation</Link></li>
              <li><Link activeClassName="active" to="/docs/tutorials-how-to/modifying-the-rest-api-response/">Modifying the REST API Response</Link></li>
            </ul>
          </>
        )
        break
      case "rest-api":
        this.tree = (
          <>
            <h2>REST API</h2>
            <ul>
              <li><Link activeClassName="active" to="/docs/rest-api/requirements/">Requirements</Link></li>
              <li><Link activeClassName="active" to="/docs/rest-api/generate-api-keys/">Generate API keys</Link></li>
              <li><Link activeClassName="active" to="/docs/rest-api/test-if-the-api-is-working/">Test if the API is working</Link></li>
              <li><Link activeClassName="active" to="/docs/rest-api/developer-documentation/">Developer Documentation</Link></li>
              <li><Link activeClassName="active" to="/docs/rest-api/libraries/">Libraries</Link></li>
            </ul>
          </>
        )
        break
      case "internal-api-docs":
        this.tree = (
          <>
            <h2>Internal API docs</h2>
            <ul>
              <li><Link activeClassName="active" to="/docs/internal-api-docs/database-structure/">Database Structure</Link></li>
              <li><Link activeClassName="active" to="/docs/internal-api-docs/filters-reference/">Filters Reference</Link></li>
              <li><Link activeClassName="active" to="/docs/internal-api-docs/functions-reference/">Functions Reference</Link></li>
              <li><Link activeClassName="active" to="/docs/internal-api-docs/actions-reference/">Actions Reference</Link></li>
            </ul>
          </>
        )
        break
      case "codex":
        this.tree = (
          <>
            <h2>Codex</h2>
            <ul>
              <li><Link activeClassName="active" to="/docs/codex/theming/">Theming</Link></li>
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
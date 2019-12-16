import React, { Component } from "react"
import Layout from "../components/layout/layout"
import { Link } from "gatsby"
import DocList from "../components/doc-list/doc-list"

class Docs extends Component {
  render() {
    return (
      <Layout>
        <div className="row">
          <div className="col-12">
            <h2>Getting started</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <DocList>
              <h3><Link to="/docs/handbook/">Handbook</Link></h3>
              <ul>
                <li><i className="fas fa-folder"/> <Link to="/docs/handbook/installation/">Installation</Link></li>
                <li><i className="fas fa-folder"/> <Link to="/docs/handbook/setup/">Setup</Link></li>
                <li><i className="fas fa-folder"/> <Link to="/docs/handbook/plugin-settings/">Plugin Settings</Link></li>
                <li><i className="fas fa-folder"/> <Link to="/docs/handbook/license-keys/">License keys</Link></li>
                <li><i className="fas fa-folder"/> <Link to="/docs/handbook/generators/">Generators</Link></li>
                <li><i className="fas fa-folder"/> <Link to="/docs/handbook/woocommerce-products/">WooCommerce Products</Link></li>
                <li><i className="fas fa-folder"/> <Link to="/docs/handbook/woocommerce-orders/">WooCommerce Orders</Link></li>
              </ul>
            </DocList>
          </div>

          <div className="col-4">
            <DocList>
              <h3>Tutorials & How-To</h3>
              <ul>
                <li><i className="fas fa-folder"/> <Link to="/docs/tutorials-how-to/additional-rest-api-validation/">Additional REST API Validation</Link></li>
                <li><i className="fas fa-folder"/> <Link to="/docs/tutorials-how-to/modifying-the-rest-api-response/">Modifying the REST API Response</Link></li>
              </ul>
            </DocList>

          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2>Developer Documentation</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <DocList>
              <h3>REST API</h3>
              <ul>
                <li><i className="fas fa-folder"/> <Link to="/docs/rest-api/requirements/">Requirements</Link></li>
                <li><i className="fas fa-folder"/> <Link to="/docs/rest-api/generate-api-keys/">Generate API keys</Link></li>
                <li><i className="fas fa-folder"/> <Link to="/docs/rest-api/test-if-the-api-is-working/">Test if the API is working</Link></li>
                <li><i className="fas fa-folder"/> <Link to="/docs/rest-api/developer-documentation/">Developer Documentation</Link></li>
                <li><i className="fas fa-folder"/> <Link to="/docs/rest-api/libraries/">Libraries</Link></li>
              </ul>
            </DocList>
          </div>

          <div className="col-4">
            <DocList>
              <h3>Internal API docs</h3>
              <ul>
                <li><i className="fas fa-folder"/> <Link to="/docs/internal-api-docs/database-structure/">Database Structure</Link></li>
                <li><i className="fas fa-folder"/> <Link to="/docs/internal-api-docs/filters-reference/">Filters Reference</Link></li>
                <li><i className="fas fa-folder"/> <Link to="/docs/internal-api-docs/functions-reference/">Functions Reference</Link></li>
                <li><i className="fas fa-folder"/> <Link to="/docs/internal-api-docs/actions-reference/">Actions Reference</Link></li>
              </ul>
            </DocList>
          </div>

          <div className="col-4">
            <DocList>
              <h3>Codex</h3>
              <ul>
                <li><i className="fas fa-folder"/> <Link to="/docs/codex/theming/">Theming</Link></li>
              </ul>
            </DocList>


          </div>
        </div>

      </Layout>
    )
  }
}

export default Docs
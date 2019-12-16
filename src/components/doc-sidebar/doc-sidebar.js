import React from "react"
import "./doc-sidebar.module.scss"
import { Link } from "gatsby"

export default class DocSidebar extends React.Component {
  tree

  componentDidMount() {
    const parentData = this.props.parentData
    const pathname = parentData.location.pathname
    const urlParams = pathname.split("/")

    console.log(urlParams)
  }

  render() {
    return (
      <div className="doc-sidebar">
        <h2>Handbook</h2>
        <ul>
          <li><Link to="/docs/handbook/installation/">Installation</Link></li>
          <li><Link to="/docs/handbook/setup/">Setup</Link></li>
          <li><Link to="/docs/handbook/plugin-settings/">Plugin Settings</Link></li>
          <li className="active"><Link to="/docs/handbook/license-keys/">License keys</Link></li>
          <li><Link to="/docs/handbook/generators/">Generators</Link></li>
          <li><Link to="/docs/handbook/woocommerce-products/">WooCommerce Products</Link></li>
          <li><Link to="/docs/handbook/woocommerce-orders/">WooCommerce Orders</Link></li>
        </ul>
      </div>
    )
  }
}
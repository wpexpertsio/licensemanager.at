import React from "react"
import "./doc-sidebar.module.scss"
import { Link } from "gatsby"

export default class DocSidebar extends React.Component {
  tree

  initComponent() {
    const parentData = this.props.parentData
    const pathname   = parentData.location.pathname
    const urlParams  = pathname.split("/")

    let parentId = 0
    let sidebarTitle = []
    let subTree = []
    let subList = []
    let sidebarCategories = []
    const current = this.props.parentData.data.current
    const children = this.props.parentData.data.children
    const siblings = this.props.parentData.data.siblings

    switch(urlParams[2]) {
      case "handbook":
        parentId = 7
        sidebarTitle.push(<h2 key="heading-2-handbook">Handbook</h2>)
        sidebarCategories = [
          {
            slug: "installation",
            path: "/docs/handbook/installation/",
            title: "Installation"
          },
          {
            slug: "setup",
            path: "/docs/handbook/setup/",
            title: "Setup"
          },
          {
            slug: "plugin-settings",
            path: "/docs/handbook/plugin-settings/",
            title: "Plugin settings"
          },
          {
            slug: "license-keys",
            path: "/docs/handbook/license-keys/",
            title: "License keys"
          },
          {
            slug: "generators",
            path: "/docs/handbook/generators/",
            title: "Generators"
          },
          {
            slug: "woocommerce-products",
            path: "/docs/handbook/woocommerce-products/",
            title: "WooCommerce products"
          },
          {
            slug: "woocommerce-orders",
            path: "/docs/handbook/woocommerce-orders/",
            title: "WooCommerce orders"
          }
        ]

        break
      case "tutorials-how-to":
        parentId = 8
        sidebarTitle.push(<h2 key="heading-2-tutorials-how-to">Tutorials & How-To</h2>)
        sidebarCategories = [
          {
            slug: "additional-rest-api-validation",
            path: "/docs/tutorials-how-to/additional-rest-api-validation/",
            title: "Additional REST API Validation"
          },
          {
            slug: "modifying-the-rest-api-response",
            path: "/docs/tutorials-how-to/modifying-the-rest-api-response/",
            title: "Modifying the REST API Response"
          },
        ]

        break
      case "rest-api":
        parentId = 9
        sidebarTitle.push(<h2 key="heading-2-rest-api">REST API</h2>)
        sidebarCategories = [
          {
            slug: "requirements",
            path: "/docs/rest-api/requirements/",
            title: "Requirements"
          },
          {
            slug: "generate-api-keys",
            path: "/docs/rest-api/generate-api-keys/",
            title: "Generate API keys"
          },
          {
            slug: "test-if-the-api-is-working",
            path: "/docs/rest-api/test-if-the-api-is-working/",
            title: "Test if the API is working"
          },
          {
            slug: "developer-documentation",
            path: "/docs/rest-api/developer-documentation/",
            title: "Developer Documentation"
          },
          {
            slug: "libraries",
            path: "/docs/rest-api/libraries/",
            title: "Libraries"
          },
        ]

        break
      case "internal-api-docs":
        parentId = 10
        sidebarTitle.push(<h2 key="heading-2-internal-api-docs">Internal API docs</h2>)
        sidebarCategories = [
          {
            slug: "database-structure",
            path: "/docs/internal-api-docs/database-structure/",
            title: "Database Structure"
          },
          {
            slug: "filters-reference",
            path: "/docs/internal-api-docs/filters-reference/",
            title: "Filters Reference"
          },
          {
            slug: "functions-reference",
            path: "/docs/internal-api-docs/functions-reference/",
            title: "Functions Reference"
          },
          {
            slug: "actions-reference",
            path: "/docs/internal-api-docs/actions-reference/",
            title: "Actions Reference"
          },
        ]

        break
      case "codex":
        parentId = 11
        sidebarTitle.push(<h2 key="heading-2-codex">Codex</h2>)
        sidebarCategories = [
          {
            slug: "theming",
            path: "/docs/codex/theming/",
            title: "Theming"
          }
        ]

        break
      default:
        this.tree = ""
        break
    }

    // We are at the top-level category
    if (current.wordpress_parent === 0) {
      children.edges.forEach(edge => {
        let doc = edge.node

        subTree.push(
          <li key={ doc.path }>
            <Link activeClassName="active" to={ doc.path }>{ doc.title }</Link>
          </li>
        )
      })
    }

    // We are at the first level
    else if (current.wordpress_parent === parentId) {
      // First check if there are children, if so, add them
      if (children.edges.length > 0 && (children.edges[0].node.wordpress_parent === current.wordpress_id)) {
        children.edges.forEach(edge => {
          let doc = edge.node;

          subList.push(
            <li key={ doc.path }>
              <Link activeClassName="active" to={ doc.path }>{ doc.title }</Link>
            </li>
          )
        })
      }

      siblings.edges.forEach(edge => {
        let doc = edge.node

        if (doc.wordpress_id === current.wordpress_id && subList.length > 0) {
          subTree.push(
            <li key={ doc.path }>
              <Link activeClassName="active" to={ doc.path } dangerouslySetInnerHTML={{ __html: doc.title }}/>
              <ul>{ subList }</ul>
            </li>
          )
        } else {
          subTree.push(
            <li key={ doc.path }>
              <Link activeClassName="active" to={ doc.path } dangerouslySetInnerHTML={{ __html: doc.title }}/>
            </li>
          )
        }
      })
    }

    // We are on the last level
    else if (current.wordpress_parent !== parentId) {
      siblings.edges.forEach(edge => {
        let doc = edge.node

        subList.push(
          <li key={ doc.path }>
            <Link activeClassName="active" to={ doc.path }>{ doc.title }</Link>
          </li>
        )
      })

      sidebarCategories.forEach(node => {
        if (current.path.indexOf(node.path) !== -1) {
          subTree.push(
            <li key={ node.path } className="active">
              <Link activeClassName="active" to={ node.path }>{ node.title }</Link>
              <ul>{ subList }</ul>
            </li>
          )
        } else {
          subTree.push(
            <li key={ node.path }>
              <Link activeClassName="active" to={ node.path }>{ node.title }</Link>
            </li>
          )
        }
      })
    }

    this.tree = [
      sidebarTitle,
      <ul key="ul-sub-tree">{ subTree }</ul>
    ]
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
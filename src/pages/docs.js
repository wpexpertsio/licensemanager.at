import React, { Component } from "react"
import Layout from "../components/layout/layout"
import { Link, graphql } from "gatsby"
import DocList from "../components/doc-list/doc-list"
import SEO from "../components/seo"

class Docs extends Component {
  render() {
    const children = this.props.data.children.edges
    let articlesHandbook = []
    let articlesTutorialsAndHowTo = []
    let articlesRestApi = []
    let articlesInternalApiDocs = []
    let articlesCodex = []

    children.forEach(edge => {
      let doc = edge.node

      if (doc.wordpress_parent === 7) {
        articlesHandbook.push(
          <li key={ doc.id }><i className="fas fa-folder"/> <Link to={ doc.path } dangerouslySetInnerHTML={{ __html: doc.title }}/></li>
        )
      }

      if (doc.wordpress_parent === 8) {
        articlesTutorialsAndHowTo.push(
          <li key={ doc.id }><i className="fas fa-folder"/> <Link to={ doc.path } dangerouslySetInnerHTML={{ __html: doc.title }}/></li>
        )
      }

      if (doc.wordpress_parent === 9) {
        articlesRestApi.push(
          <li key={ doc.id }><i className="fas fa-folder"/> <Link to={ doc.path } dangerouslySetInnerHTML={{ __html: doc.title }}/></li>
        )
      }

      if (doc.wordpress_parent === 10) {
        articlesInternalApiDocs.push(
          <li key={ doc.id }><i className="fas fa-folder"/> <Link to={ doc.path } dangerouslySetInnerHTML={{ __html: doc.title }}/></li>
        )
      }

      if (doc.wordpress_parent === 11) {
        articlesCodex.push(
          <li key={ doc.id }><i className="fas fa-folder"/> <Link to={ doc.path } dangerouslySetInnerHTML={{ __html: doc.title }}/></li>
        )
      }
    })

    return (
      <Layout>
        <SEO title="Docs" description="Easily sell and manage your licenses through WooCommerce" />

        <div className="row">
          <div className="col-12">
            <h2>Getting started</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <DocList>
              <h3><Link to="/docs/handbook/">Handbook</Link></h3>
              <ul>{ articlesHandbook }</ul>
            </DocList>
          </div>

          <div className="col-4">
            <DocList>
              <h3><Link to="/docs/tutorials-how-to/">Tutorials & How-To</Link></h3>
              <ul>{ articlesTutorialsAndHowTo }</ul>
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
              <h3><Link to="/docs/rest-api/">REST API</Link></h3>
              <ul>{ articlesRestApi }</ul>
            </DocList>
          </div>

          <div className="col-4">
            <DocList>
              <h3><Link to="/docs/internal-api-docs/">Internal API docs</Link></h3>
              <ul>{ articlesInternalApiDocs }</ul>
            </DocList>
          </div>

          <div className="col-4">
            <DocList>
              <h3><Link to="/docs/codex/">Codex</Link></h3>
              <ul>{ articlesCodex }</ul>
            </DocList>
          </div>

        </div>
      </Layout>
    )
  }
}

export default Docs

export const docQuery = graphql`
    query {
        parents: allWordpressWpDocs(filter: { wordpress_id: { in: [7,8,9,10,11] } }, sort: { fields: menu_order, order: ASC }) {
            edges {
                node {
                    title
                    slug
                    path
                    menu_order
                    wordpress_id
                    wordpress_parent
                }
            }
        },
        children: allWordpressWpDocs(filter: { wordpress_parent: { in: [7,8,9,10,11] } }, sort: { fields: menu_order, order: ASC }) {
            edges {
                node {
                    id
                    title
                    slug
                    path
                    menu_order
                    wordpress_id
                    wordpress_parent
                }
            }
        }
    }
`
import React, { Component } from "react"
import Layout from "../components/layout/layout"
import { Link, graphql } from "gatsby"

class DocsPage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <div>
          <h1>Docs</h1>
          {data.allWordpressWpDocs.edges.map(({ node }) => (
            <div key={ node.slug }>
              <Link to={ node.path }>
                <span dangerouslySetInnerHTML={{ __html: node.title }}/>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default DocsPage

export const pageQuery = graphql`
    query {
        allWordpressWpDocs(filter: {status: {eq: "publish"}}) {
            edges {
                node {
                    id
                    wordpress_id
                    wordpress_parent
                    title
                    status
                    type
                    slug
                    path
                }
            }
        }
    }
`
import React from "react"
import "./doc.module.scss"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../layout/layout"
import DocSidebar from "../doc-sidebar/doc-sidebar"
import { Link } from "gatsby"

class Doc extends React.Component {
  breadcrumbs

  setBreadcrumbs(pathname) {
    const urlParams = pathname.split("/")
    let breadcrumbs = []
    let url = ""

    breadcrumbs.push(
      <>
        <Link to="/"><i className="fas fa-home"/> Home</Link>
      </>
    )

    urlParams.forEach(param => {
      if (param !== "") {
        breadcrumbs.push(
          <>
            {/*&nbsp;|&nbsp;<Link to={"/" + url + param + "/"}>{ param.charAt(0).toUpperCase() + param.slice(1) }</Link>*/}
            &nbsp;|&nbsp;<Link to={"/" + url + param + "/"}>{ param }</Link>
          </>
        )
        url += param + "/"
      }
    })

    this.breadcrumbs = breadcrumbs
  }

  initComponent() {
    const pathname = this.props.location.pathname

    this.setBreadcrumbs(pathname)
  }

  render() {
    this.initComponent()

    let articles = [];
    const doc = this.props.data.current

    if (this.props.data.children.edges.length > 0) {
      articles.push(
        <>
          <h3>Articles</h3>
        </>
      )

      this.props.data.children.edges.forEach(child => {
        articles.push(
          <>
            <div key={ child.node.path }><Link to={ child.node.path }>{ child.node.title }</Link></div>
          </>
        )
      })
    }

    return (
      <Layout>
        <div className="doc">
          <DocSidebar parentData={ this.props }/>
          <div className="doc-content">
            <div className="doc-breadcrumbs">
              { this.breadcrumbs }
            </div>
            <h1 className="doc-title" dangerouslySetInnerHTML={{ __html: doc.title }} />
            <div className="doc-body" dangerouslySetInnerHTML={{ __html: doc.content }} />
            <div className="doc-articles">
              { articles }
            </div>
            <div className="doc-footer">
              <div className="doc-still-stuck">
                <i className="fas fa-envelope"/> Still stuck? <Link to="/contact/">How can we help?</Link>
              </div>
              <div className="doc-updated-at">
                <i>Updated on { doc.modified }</i>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

Doc.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Doc

export const docQuery = graphql`
    query($wordpress_id: Int!) {
        current: wordpressWpDocs(wordpress_id: { eq: $wordpress_id }) {
            title
            content
            modified(formatString: "D.M.Y")
        },
        children: allWordpressWpDocs(filter: {wordpress_parent: {eq: $wordpress_id}}, sort: {fields: menu_order, order: ASC}) {
            edges {
                node {
                    title
                    slug
                    path
                    menu_order
                    wordpress_id
                }
            }
        }
    }
`
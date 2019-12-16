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

  componentWillMount() {
    const pathname = this.props.location.pathname

    this.setBreadcrumbs(pathname)
  }

  componentDidMount() {
    console.log(this.props.data)
  }

  render() {
    const doc = this.props.data.wordpressWpDocs

    return (
      <Layout>
        <div className="doc">
          <DocSidebar parentData={ this.props }/>
          <div className="doc-content">
            <div className="doc-breadcrumbs">
              { this.breadcrumbs }
            </div>
            <h1 dangerouslySetInnerHTML={{ __html: doc.title }} />
            <div dangerouslySetInnerHTML={{ __html: doc.content }} />
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
    query($id: String!) {
        wordpressWpDocs(id: { eq: $id }) {
            title
            content
        }
    }
`
import React from "react"
import "./doc.scss"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import { graphql, Link } from "gatsby"
import Sidebar from "../../components/sidebar"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Structure from "../../config/sidebar.yml"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

class Doc extends React.Component {
  constructor(props) {
    super(props);

    this.html = null;

    this.state = {
      path: null
    }
  }

  componentDidMount() {
    this.updatePath();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.path === null) {
      this.updatePath();
    }
  }

  render() {
    const mdx = this.props.data.mdx;

    return (
      <Layout>
        <Seo title={mdx.frontmatter.title + " | Documentation"}
             description={mdx.frontmatter.description}/>

        <div className={"doc"}>
          <Sidebar path={this.state.path}/>

          <main className={"doc-content"}>
            <h1 className={"doc-title"}>{ mdx.frontmatter.title }</h1>

            <MDXRenderer>{mdx.body}</MDXRenderer>
            <hr/>
            <p className={"help"}>
              <span className={"let-us-know"}>
                <i className="far fa-envelope"/>
                Stuck or need help? <Link to={"/contact"}>Let us know!</Link>
              </span>
              <span className={"last-modified"}>
                Updated on: {mdx.frontmatter.lastModified}
              </span>
            </p>
          </main>
          <aside className={"doc-main-scrollspy"}>
            <h3>All docs</h3>
            <ul>
              {
                Structure.map(chapter => {
                  return(
                    <li key={"scrollspy-chapter-" + chapter.link}>
                      <Link to={"/docs" + chapter.link + chapter.items[0].link + chapter.items[0].items[0].link}
                            className={(this.state.path === chapter.link) ? "active" : ""}>
                        {chapter.label}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </aside>

        </div>
      </Layout>
    )
  }

  updatePath() {
    const pathArray = this.props.location.pathname.split('/');
    const path = pathArray[2];
    this.setState({ path: '/' + path })
  }
}

export default Doc

export const docQuery = graphql`
  query docQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        lastModified
      }
    }
  }
`

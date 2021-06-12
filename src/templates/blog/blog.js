import React from "react"
import "./blog.scss"
import Layout from "../../components/layout/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby";
import moment from "moment";
import Heading from "../../components/heading/heading";

class Blog extends React.Component {

  render() {
    const mdx = this.props.data.mdx;

    return (
      <Layout>

        <div className={"row"}>
          <div className={"col-12"}>
            <Heading>{ mdx.frontmatter.title }</Heading>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-12"}>
            <div className={"single-blog-entry"}>

              <div className={"blog-author"}>
              </div>

              <MDXRenderer>{ mdx.body }</MDXRenderer>

              <p>
                <small>{ moment(mdx.frontmatter.date).format('DD.MM.YYYY') },</small>
                <small>&nbsp;{ mdx.frontmatter.author }</small>
              </p>

            </div>
          </div>
        </div>



      </Layout>
    );
  }
}

export default Blog

export const blogQuery = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        author
        email
        date
        lastModified
        month
        title
        year
        excerpt
      }
    }
  }
`

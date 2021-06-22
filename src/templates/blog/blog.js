import React from "react"
import "./blog.scss"
import Layout from "../../components/layout/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby";
import moment from "moment";
import Heading from "../../components/heading/heading";
import Seo from "../../components/seo";

class Blog extends React.Component {

  render() {
    const mdx = this.props.data.mdx;
    const gravatar = this.props.data.gravatar.url;

    return (
      <Layout>
        <Seo title={mdx.frontmatter.title + " | Blog"}/>

        <div className={"row"}>
          <div className={"col-12"}>
            <Heading>{mdx.frontmatter.title}</Heading>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-12"}>
            <div className={"single-blog-entry"}>

              <MDXRenderer>{ mdx.body }</MDXRenderer>

              <hr/>

              <div className={"blog-author"}>
                <img src={ gravatar } alt="" />
                <div>
                  <p>
                    <small><strong>Author</strong> { mdx.frontmatter.author }</small><br/>
                    <small><strong>Date</strong> { moment(mdx.frontmatter.date).format("DD.MM.YYYY") }</small>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>



      </Layout>
    );
  }
}

export default Blog

export const blogQuery = graphql`
  query ($id: String, $email: String) {
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
    },
    gravatar(email: { eq: $email }) {
      url
    }
  }
`

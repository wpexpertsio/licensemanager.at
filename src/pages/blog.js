import React from "react"
import Layout from "../components/layout/layout"
import Excerpt from "../components/excerpt/excerpt"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class Blog extends React.Component {
  render() {
    const posts = this.props.data.posts.edges;
    let html = [];

    posts.forEach(edge => {
      let post = edge.node;

      html.push(<Excerpt className="col-4" post={ post } key={ post.id }/>)
    });

    return (
      <Layout>
        <SEO title="Blog" description="Easily sell and manage your licenses through WooCommerce" />
        <div className="row">{ html }</div>
      </Layout>
    )
  }
}

export default Blog

export const docQuery = graphql`
    query {
        posts: allWordpressPost {
            edges {
                node {
                    title
                    slug
                    path
                    author,
                    excerpt,
                    date(formatString: "d.m.Y")
                }
            }
        }
    }
`
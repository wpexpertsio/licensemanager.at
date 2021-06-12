import React from "react"
import "./blog.scss"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby";
import moment from "moment";
import Heading from "../components/heading/heading";

class Blog extends React.Component {
  render() {
    const blogs = this.props.data.allMdx.edges;

    return (
      <Layout>
        <SEO title="Blog" description="The License Manager for WooCommerce WordPress Plugin allows you to easily sell and manage your licenses through WooCommerce." />

        <div className="row">
          <div className="col-12">
            <Heading>Blog</Heading>
          </div>
        </div>

        <div className={"row"}>
          <div className="col-12">
            <div className={"blog-main"}>
              {
                blogs.map(blog => {
                  return(
                    <Link className={"blog-link-wrap"} to={ '/' + blog.node.slug } key={"blog-article-" + blog.node.id}>
                      <article className={"blog-entry"}>
                        <div className={"blog-entry-header"}>
                          <img src={ `/images/${ blog.node.slug }.png` } alt="" />
                        </div>
                        <div className={"blog-entry-body"}>
                          <small className={"blog-meta"}>
                            { moment(blog.node.frontmatter.date).format('DD.MM.YYYY') },
                            &nbsp;{ blog.node.frontmatter.author }
                          </small>
                          <h2 className={"blog-title"}>{ blog.node.frontmatter.title }</h2>
                          <p className={"blog-excerpt"}>{ blog.node.frontmatter.excerpt }</p>
                        </div>
                      </article>
                    </Link>
                  )
                })
              }
            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default Blog

export const blogQuery = graphql`
  query blogQuery {
    allMdx(filter: {slug: {regex: "/^blog\//"}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          body
          slug
          frontmatter {
            author
            date
            lastModified
            month
            title
            year
            excerpt
          }
        }
      }
    }
  }
`

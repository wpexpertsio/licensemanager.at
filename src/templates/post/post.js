import React from "react";
import "./post.module.scss";
import PropTypes from "prop-types"
import Layout from "../../components/layout/layout"
import { graphql } from "gatsby"

class Post extends React.Component {
  render() {
    const post = this.props.data.wordpressPost;

    return (
      <Layout>
        <article className="blog-post">
          <time>{ post.modified }</time>
          <h1>{ post.title }</h1>
          <div className="separator"/>
          <div dangerouslySetInnerHTML={{ __html: post.content }}/>
        </article>
      </Layout>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
    query($id: String) {
        wordpressPost(id: { eq: $id }) {
            content
            date(formatString: "d.m.Y")
            modified(formatString: "d.m.Y")
            title
        }
    }
`
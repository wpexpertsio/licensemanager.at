import React from "react"
import "./excerpt.module.scss"
import { Link } from "gatsby";

class Excerpt extends React.Component {
  render() {
    const post = this.props.post;

    return (
      <article className={ this.props.className + ' blog-post-excerpt' }>
        <small><time>{ post.date }</time> - Drazen Bebic</small>
        <h2>{ post.title }</h2>
        <div className="excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }}/>
        <p className="link-more">
          <Link to={ '/blog/' + post.path }>Read more...</Link>
        </p>
      </article>
    )
  }
}

export default Excerpt
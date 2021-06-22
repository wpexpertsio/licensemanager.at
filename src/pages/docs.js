import React, { Component } from "react"
import "./docs.scss"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Structure from "../config/sidebar.yml"
import PrimaryButton from "../components/primary-button/primary-button"
import Heading from "../components/heading/heading";

class Docs extends Component {
  render() {
    const html = (() => {
      return(
        <>
          {
            Structure.map((chapter, i) => {
              return(
                <div key={"doc-chapter-" + i} className={"col-3 doc-chapter"}>
                  <h2>{chapter.label}</h2>
                  <ul>
                  {
                    chapter.items.map((item, j) => {
                      return(
                        <li key={"doc-subchapter-" + i + "-" + j}><PrimaryButton to={'/docs' + chapter.link + item.link +  item.items[0].link}>{item.label}</PrimaryButton></li>
                      )
                    })
                  }
                  </ul>
                </div>
              )
            })
          }
        </>
      )
    });

    return (
      <Layout>
        <Seo title="Documentation" description="Easily sell and manage your licenses through WooCommerce" />

        <div className={"row"}>
          <div className={"col-12"}>
            <Heading>Documentation</Heading>
          </div>
        </div>

        <div className="row">
          <div className={"col-12"}>
            { html() }
          </div>
        </div>
      </Layout>
    )
  }
}

export default Docs

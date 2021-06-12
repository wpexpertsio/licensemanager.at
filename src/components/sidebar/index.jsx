import React from "react"
import "./style.scss"
import { Link } from "gatsby"
import Structure from "../../config/sidebar.yml"

export default class Index extends React.Component {
  render() {
    this.updateStructure();

    return (
      <>
        {this.sidebar}
      </>
    );
  }

  updateStructure() {
    const sidebar = (() => {
      const path = this.props.path;

      return (
        <aside key={this.props.path} className={"doc-sidebar"}>
          {Structure.map(chapter => {
            if (chapter.link !== path) {
              return '';
            }

            return (
              <nav>
                <ul>
                  {
                    chapter.items.map((item, i) => {
                      return(
                        <>
                          <li key={"chapter-" + i}>{item.label}</li>
                          <ul key={"chapter-list-" + i}>
                            {
                              item.items.map((subItem, j) => {
                                return(
                                  <li key={"sub-chapter-" + i + "-" + j}>
                                    <Link to={'/docs' + chapter.link + item.link + subItem.link}
                                          activeClassName={"active"}
                                          key={"sub-chapter-link-" + j}>
                                      {subItem.label}
                                    </Link>
                                  </li>
                                );
                              })
                            }
                          </ul>
                        </>
                      )
                    })
                  }
                </ul>
              </nav>

            )
          })}
        </aside>
      );
    });

    this.sidebar = sidebar();
  }
}

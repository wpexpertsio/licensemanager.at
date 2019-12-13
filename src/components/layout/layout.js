import React from "react"
import styles from "./layout.module.scss"
import Navigation from "../navigation/navigation"
import Header from "../header/header"
import Footer from "../footer/footer"

export default ({ children }) => (
  <div id={ styles.mainContent }>
    <Navigation/>
    <Header/>
    <div id={ styles.innerContent }>
      {children}
    </div>
    <Footer/>
  </div>
)
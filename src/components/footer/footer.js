import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.scss"
import { config } from "../../config.js"

export default () => (
  <footer>

    <div className={styles.footerColumn}>
      <h4 className={styles.footerTitle}>Newsletter</h4>
      <p>Subscribe to the plugin newsletter to always stay up to date. No spam, that's a promise.</p>
      <input type="text" placeholder="Email (required)"/>
      <br/>
      <input type="text" placeholder="First name"/>
      <br/>
      <input type="text" placeholder="Last name"/>
      <br/>
      <input type="submit" value="Subscribe"/>
    </div>

    <div className={styles.footerColumn}>
      <h4 className={styles.footerTitle}>Social Media</h4>
      <Link to={config.gitHub} target="_blank">GitHub</Link>
      <br/>
      <Link to={config.linkedIn} target="_blank">LinkedIn</Link>
      <br/>
      <Link to={config.xing} target="_blank">Xing</Link>
      <br/>
      <Link to={config.wordPress} target="_blank">WordPress.org</Link>
    </div>

    <div className={styles.footerColumn}>
      <h4 className={styles.footerTitle}>Affiliates</h4>
    </div>

  </footer>
)
import React from "react"
import styles from "./footer.module.scss"

export default () => (
  <footer>

    <div className={ styles.footerColumn }>
      <h4 className={ styles.footerTitle }>Newsletter</h4>
      <p>Subscribe to the plugin newsletter to always stay up to date. No spam, that's a promise.</p>
      <input type="text" placeholder="Email (required)"/>
      <br/>
      <input type="text" placeholder="First name"/>
      <br/>
      <input type="text" placeholder="Last name"/>
      <br/>
      <input type="submit" value="Subscribe"/>
    </div>

    <div className={ styles.footerColumn }>
      <h4 className={ styles.footerTitle }>Social Media</h4>
      <a href="https://github.com/drazenbebic" target="_blank" rel="noopener noreferrer">GitHub</a>
      <br/>
      <a href="https://www.linkedin.com/in/drazenbebic/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <br/>
      <a href="https://www.xing.com/profile/Drazen_Bebic/" target="_blank" rel="noopener noreferrer">Xing</a>
      <br/>
      <a href="https://profiles.wordpress.org/drazenbebic/" target="_blank" rel="noopener noreferrer">WordPress.org</a>
    </div>

    <div className={ styles.footerColumn }>
      <h4 className={ styles.footerTitle }>Affiliates</h4>
    </div>

  </footer>
)
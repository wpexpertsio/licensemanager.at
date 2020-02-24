import React from "react"
import "./footer.module.scss"
import { Link } from "gatsby"
import logoPhpStorm from "../../images/footer-logo-phpstorm.webp";
import logoDataGrip from "../../images/footer-logo-datagrip.webp";
import logoGatsbyJs from "../../images/footer-logo-gatsby.webp";
import addToMailchimp from "gatsby-plugin-mailchimp/src"
import { OutboundLink } from "gatsby-plugin-google-analytics"

export default class Footer extends React.Component {
  state = {
    email: "",
    firstName: "",
    lastName: ""
  }

  handleInputChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    addToMailchimp(this.state.email, {
      FNAME: this.state.firstName,
      LNAME: this.state.lastName
    })
      .then(data => {
        alert(data.msg)
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    return (
      <footer>
        <div className="footer-columns">
          <div className="container">
            <div className="footer-column">
              <h4 className="footer-title">Newsletter</h4>
              <p>Subscribe to the plugin newsletter to always stay up to date. No spam, that's a promise.</p>
              <form onSubmit={ this.handleSubmit }>
                <input type="email"
                       name="email"
                       defaultValue={ this.state.email }
                       onChange={ this.handleInputChange }
                       placeholder="Email (required)"
                       aria-label="Email (required)"/>
                <input type="text"
                       name="firstName"
                       defaultValue={ this.state.firstName }
                       onChange={ this.handleInputChange }
                       placeholder="First name"
                       aria-label="First name"/>
                <input type="text"
                       name="lastName"
                       defaultValue={ this.state.lastName }
                       onChange={ this.handleInputChange }
                       placeholder="Last name"
                       aria-label="Last name"/>
                <input type="submit" value="Subscribe"/>
              </form>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">Public Profiles</h4>
              <OutboundLink className="footer-link" href="https://github.com/drazenbebic" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"/>
              </OutboundLink>
              <OutboundLink className="footer-link" href="https://www.linkedin.com/in/drazenbebic/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"/>
              </OutboundLink>
              <OutboundLink className="footer-link" href="https://www.xing.com/profile/Drazen_Bebic/" target="_blank" rel="noopener noreferrer" aria-label="Xing">
                <i className="fab fa-xing"/>
              </OutboundLink>
              <OutboundLink className="footer-link" href="https://profiles.wordpress.org/drazenbebic/" target="_blank" rel="noopener noreferrer" aria-label="WordPress.org">
                <i className="fab fa-wordpress"/>
              </OutboundLink>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">Built with</h4>
              <OutboundLink className="built-with" href="https://www.jetbrains.com/?from=license-manager-for-woocommerce" target="_blank" rel="noopener noreferrer">
                <img src={ logoPhpStorm } alt="PhpStorm" title="PhpStorm"/>
              </OutboundLink>
              <OutboundLink className="built-with" href="https://www.jetbrains.com/?from=license-manager-for-woocommerce" target="_blank" rel="noopener noreferrer">
                <img src={ logoDataGrip } alt="DataGrip" title="DataGrip"/>
              </OutboundLink>
              <OutboundLink className="built-with" href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
                <img src={ logoGatsbyJs } alt="GatsbyJS" title="Gatsby JS"/>
              </OutboundLink>
            </div>
          </div>
        </div>

        <div className="footer-nav">
          <div className="container">
            <ul>
              <li><Link activeClassName="active" to="/">Home</Link></li>
              <li><Link activeClassName="active" to="/blog/">Blog</Link></li>
              <li><Link activeClassName="active" to="/contact/">Contact</Link></li>
              <li><Link activeClassName="active" to="/docs/">Docs</Link></li>
              <li><Link activeClassName="active" to="/donate/">Donate</Link></li>
              <li><Link activeClassName="active" to="/privacy-policy/">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <span className="copyright-text">Copyright licensemanager.at 2020</span>
          </div>
        </div>

      </footer>
    )
  }
}
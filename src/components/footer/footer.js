import React from "react"
import "./footer.module.scss"
import { Link } from "gatsby"
import logoPhpStorm from "../../images/footer-logo-phpstorm.png";
import logoDataGrip from "../../images/footer-logo-datagrip.png";
import addToMailchimp from "gatsby-plugin-mailchimp/src"

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
                       placeholder="Email (required)"/>
                <input type="text"
                       name="firstName"
                       defaultValue={ this.state.firstName }
                       onChange={ this.handleInputChange }
                       placeholder="First name"/>
                <input type="text"
                       name="lastName"
                       defaultValue={ this.state.lastName }
                       onChange={ this.handleInputChange }
                       placeholder="Last name"/>
                <input type="submit" value="Subscribe"/>
              </form>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">Public Profiles</h4>
              <a className="footer-link" href="https://github.com/drazenbebic" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"/>
              </a>
              <a className="footer-link" href="https://www.linkedin.com/in/drazenbebic/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"/>
              </a>
              <a className="footer-link" href="https://www.xing.com/profile/Drazen_Bebic/" target="_blank" rel="noopener noreferrer" aria-label="Xing">
                <i className="fab fa-xing"/>
              </a>
              <a className="footer-link" href="https://profiles.wordpress.org/drazenbebic/" target="_blank" rel="noopener noreferrer" aria-label="WordPress.org">
                <i className="fab fa-wordpress"/>
              </a>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">Built with</h4>
              <a className="footer-jetbrains-link" href="https://www.jetbrains.com/?from=license-manager-for-woocommerce" target="_blank" rel="noopener noreferrer">
                <img src={ logoPhpStorm } alt="PhpStorm"/>
              </a>
              <a className="footer-jetbrains-link" href="https://www.jetbrains.com/?from=license-manager-for-woocommerce" target="_blank" rel="noopener noreferrer">
                <img src={ logoDataGrip } alt="DataGrip"/>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-nav">
          <div className="container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about/">About</Link></li>
              <li><Link to="/contact/">Contact</Link></li>
              <li><Link to="/docs/">Docs</Link></li>
              <li><Link to="/donate/">Donate</Link></li>
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
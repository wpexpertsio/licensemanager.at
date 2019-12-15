import React from "react"
import Layout from "../components/layout/layout"
import Heading from "../components/heading/heading"

export default () => (
  <Layout>
    <div className="row">
      <div className="col-12">
        <Heading>Contact us!</Heading>
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        <form method="post" action="#">
          <label>
            Full name (required)
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Email (required)
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" id="subject" />
          </label>
          <label>
            Message
            <textarea name="message" id="message" rows="5" />
          </label>
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </form>
      </div>
    </div>
  </Layout>
)
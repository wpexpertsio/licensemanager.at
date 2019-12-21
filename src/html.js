import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://pixel.rubiconproject.com"/>
        <link rel="preconnect" href="https://adservice.google.com"/>
        <link rel="preconnect" href="https://adservice.google.at"/>
        <link rel="preconnect" href="https://tpc.googlesyndication.com"/>
        <link rel="preconnect" href="https://token.rubiconproject.com"/>
        <link rel="preconnect" href="https://cm.g.doubleclick.net"/>
        <script data-ad-client="ca-pub-3422791839846480" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This website works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

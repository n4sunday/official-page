import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { theme } from "../../constants/_theme"
import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"

const Layout = ({ children, sticky }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Header sticky={sticky} siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  sticky: PropTypes.bool.isRequired,
}

export default Layout

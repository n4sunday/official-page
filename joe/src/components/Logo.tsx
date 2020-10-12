import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "PiR2_logoHZ_alph_600.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <Img
      fadeIn
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{ maxWidth: "180px", margin: "0 auto" }}
    />
  )
}

export default Logo

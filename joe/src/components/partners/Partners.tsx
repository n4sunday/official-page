import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

interface Props {}

const StyledPartners = styled.div`
  padding: 3rem;

  .title {
    display: flex;
    justify-content: center;
    font-size: 1.8rem;
    margin: 1.5rem 0;
    font-weight: bold;
  }

  .partners {
    padding: 1.5rem 0;
  }
`

export const Partners = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      Banner: file(relativePath: { eq: "partners.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 500) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <StyledPartners>
      <div className="container">
        <div className="title" data-aos="fade-up" data-aos-delay="200">
          We’ve been working with all these brand
        </div>
        <div className="partners" data-aos="fade-up" data-aos-delay="400">
          <Img
            fadeIn
            fluid={data.Banner.childImageSharp.fluid}
            style={{ margin: "0 auto", overflow: "visible" }}
          />
        </div>
      </div>
    </StyledPartners>
  )
}

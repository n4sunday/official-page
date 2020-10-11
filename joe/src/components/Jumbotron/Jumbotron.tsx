import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"

interface Props {}

const StyledJumbotron = styled.header`
  display: flex;
  position: relative;

  .highlight {
    color: #c5283f;
    border-bottom: 5px solid currentColor;
    display: inline-block;
    line-height: 0.72;
  }

  .side-text {
    position: absolute;
    z-index: 5;
    top: 10%;

    .vertical-text {
      position: relative;
      color: #cecece;
      font-size: 0.8rem;
      top: 20%;
      left: 57%;
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      text-align: right;
      text-orientation: mixed;
    }

    .social {
      top: 37%;
      position: relative;
      left: 57%;

      display: grid;
      grid-template-rows: 1fr;
    }

    @media screen and (min-width: 768px) {
      position: relative;
      width: 10%;

      .vertical-text {
        position: relative;
        top: 20%;
        left: 57%;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        text-align: right;
        text-orientation: mixed;
      }

      .social {
        top: 55%;
        position: relative;
        left: 57%;

        display: grid;
        grid-gap: 1.5rem;
        grid-template-columns: 1rem;

        svg {
          cursor: pointer;
          color: #cecece;
          margin: 0 auto;
          font-size: 1.1rem;
          transition: all 0.4s;

          &:hover {
            color: #c5283f;
            transition: all 0.4s;
          }
        }
      }
    }
  }

  .text-wrapper {
    width: 100%;
    position: absolute;
    top: 25%;
    left: 10%;

    @media screen and (min-width: 768px) {
      width: 30%;
      left: 0;
      position: relative;
    }

    @media screen and (min-width: 992px) {
      width: 50%;
    }

    @media screen and (min-width: 1366px) {
      width: 40%;
    }

    @media screen and (height: 1024px) and (width: 1366px) {
      width: 60%;
    }

    .text {
      position: relative;
      font-size: 2rem;
      font-weight: bold;
      z-index: 6;
      top: 25%;
      left: 9%;

      @media screen and (min-width: 321px) {
        font-size: 3rem;
      }
      @media screen and (min-width: 768px) {
        font-size: 2.5rem;
      }
      @media screen and (min-width: 992px) {
        font-size: 3.5rem;
        left: 14%;
      }
      @media screen and (min-width: 1366px) {
        font-size: 4rem;
        left: 19%;
      }
      @media screen and (min-width: 1600px) {
        font-size: 4.5rem;
        left: 19%;
      }
      @media screen and (min-width: 1900px) {
        font-size: 5.5rem;
        left: 19%;
      }
      @media screen and (min-width: 2100px) {
        font-size: 6.5rem;
        left: 19%;
      }
    }

    .sub-text {
      position: relative;
      font-size: 1rem;
      line-height: 1.5;
      z-index: 6;
      top: 30%;
      left: 10%;

      @media screen and (min-width: 768px) {
        left: 19%;
      }
    }
  }

  .text-bg {
    position: absolute;
    font-size: 2rem;
    z-index: 1;
    font-weight: bold;
    top: 13%;
    left: 10%;

    div {
      color: #fff;
      mix-blend-mode: normal;
      text-shadow: 4.88388px 4.88388px 14.6516px rgba(0, 0, 0, 0.04);
    }

    @media screen and (min-width: 321px) {
      font-size: 2.5rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 4.5rem;
    }
    @media screen and (min-width: 992px) {
      font-size: 6rem;
    }
    @media screen and (min-width: 1366px) {
      font-size: 8rem;
    }
    @media screen and (min-width: 1600px) {
      font-size: 9rem;
    }
    @media screen and (min-width: 1900px) {
      font-size: 10rem;
    }
    @media screen and (min-width: 2100px) {
      font-size: 13rem;
    }
  }

  .banner {
    position: relative;
    z-index: 4;
    width: 100%;

    @media screen and (min-width: 768px) {
      width: 60%;
    }
  }
`

export const Jumbotron = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      Banner: file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 2100, maxHeight: 1300) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <StyledJumbotron>
      <div className="side-text">
        <div className="vertical-text" data-aos="fade-up" data-aos-delay="100">
          We draw circle by formula
        </div>
        <div className="social">
          <FontAwesomeIcon
            icon={faFacebookF}
            data-aos="fade-right"
            data-aos-delay="150"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            data-aos="fade-right"
            data-aos-delay="190"
          />
        </div>
      </div>
      <div className="text-wrapper">
        <div className="text" data-aos="fade-up" data-aos-delay="400">
          <div>
            We’re <span className="highlight">built</span>
          </div>
          <div>
            <span className="highlight">to disrupt</span> the
          </div>
          <div>digital era.</div>
        </div>
        <div className="sub-text" data-aos="fade-up" data-aos-delay="600">
          <div>As we speak, our company have been</div>
          <div>strive to be the best in a company</div>
        </div>
      </div>
      <div className="text-bg" data-aos="fade-up" data-aos-delay="200">
        <div>WE DRAW</div>
        <div>CIRCLE BY</div>
        <div>FORMULA</div>
      </div>
      <div className="banner" data-aos="fade-up" data-aos-delay="100">
        <Img
          fadeIn
          fluid={data.Banner.childImageSharp.fluid}
          style={{ margin: "0 auto", overflow: "visible" }}
        />
      </div>
    </StyledJumbotron>
  )
}

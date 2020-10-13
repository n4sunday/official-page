import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

interface Props {}

const StyledMissions = styled.div`
  background: #c5283f;
  padding: 3rem;
  position: relative;
  min-height: 849px;

  .mission {
    padding: 1.5rem 0;
  }
`

const MissionContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const Missiontitle = styled.div`
  color: #fff;
  font-size: 2.4rem;

  .highlight {
    font-weight: bold;
  }
`

const Missionsubtitle = styled.div`
  color: #fff;
  font-size: 1rem;
  width: 40%;
  font-weight: 100;
  padding: 1.5rem 1.5rem;
  line-height: 1.5;
`

const MissionImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

const MissionImage = styled.div`
  border-radius: 14px;

  &.normal {
    position: relative;
  }

  &.bottom {
    position: relative;
    top: 25%;
  }

  &.middle {
    position: relative;
    top: -25%;
  }

  &.top {
    position: relative;
    top: -50%;
  }
`

interface Props {}

export const Missions = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      mission1: file(relativePath: { eq: "mission-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 500) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      mission2: file(relativePath: { eq: "mission-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 500) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      mission3: file(relativePath: { eq: "mission-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 500) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      mission4: file(relativePath: { eq: "mission-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 500) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <StyledMissions id="missions">
      <MissionContainer>
        <Missiontitle data-aos="fade-left" data-aos-delay="100">
          <div>
            <span className="highlight"> Our mission</span> is to
          </div>
          <div>be number one</div>
        </Missiontitle>
        <Missionsubtitle data-aos="fade-up" data-aos-delay="200">
          As we speak, our company have been strive to be the best in a company
          that serve yourr need whenever, whatever you’ll need in your business
        </Missionsubtitle>
        <MissionImages>
          <MissionImage
            className="normal"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Img
              fadeIn
              fluid={data.mission1.childImageSharp.fluid}
              style={{ margin: "0 auto", overflow: "visible" }}
            />
          </MissionImage>
          <MissionImage
            className="bottom"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <Img
              fadeIn
              fluid={data.mission2.childImageSharp.fluid}
              style={{ margin: "0 auto", overflow: "visible" }}
            />
          </MissionImage>
          <MissionImage
            className="middle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Img
              fadeIn
              fluid={data.mission3.childImageSharp.fluid}
              style={{ margin: "0 auto", overflow: "visible" }}
            />
          </MissionImage>
          <MissionImage
            className="top"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <Img
              fadeIn
              fluid={data.mission4.childImageSharp.fluid}
              style={{ margin: "0 auto", overflow: "visible" }}
            />
          </MissionImage>
        </MissionImages>
      </MissionContainer>
    </StyledMissions>
  )
}

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

interface Props {}

const StyledMissions = styled.div`
  background: #c5283f;
  padding: 3rem;

  .mission {
    padding: 1.5rem 0;
  }
`
interface Props {}

export const Missions = (props: Props) => {
  return <StyledMissions id="missions">Missions</StyledMissions>
}

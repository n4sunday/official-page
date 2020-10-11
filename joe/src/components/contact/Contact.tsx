import React from "react"
import styled from "styled-components"

interface Props {}

const StyledContact = styled.div`
  background: #c5283f;
  padding: 3rem;

  .contact {
    padding: 1.5rem 0;
  }
`
interface Props {}

export const Contact = (props: Props) => {
  return <StyledContact>Contact</StyledContact>
}

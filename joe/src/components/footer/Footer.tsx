import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "styled-components"
import Logo from "../Logo"

interface Props {}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 12px;

  .logo {
    display: block;
    margin: 0 32px;
    width: 300px;
  }

  .social {
    display: grid;
    margin: 0 64px;
    grid-gap: 1.5rem;
    grid-template-columns: 2rem 2rem;

    svg {
      cursor: pointer;
      color: #cecece;
      margin: 0 auto;
      font-size: 1.6rem;
      transition: all 0.4s;

      &:hover {
        color: #c5283f;
        transition: all 0.4s;
      }
    }
  }
`

export const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <div className="logo">
        <Logo />
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
    </StyledFooter>
  )
}

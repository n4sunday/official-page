import React from "react"
import PropTypes from "prop-types"
import Logo from "../Logo"
import styled from "styled-components"

interface Props {
  sticky: boolean
  siteTitle: string
}

const StyledHeader = styled.header`
  padding: 12px;

  &.main-navbar {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    z-index: 9;
    transition: 0.3s all;

    .logo {
      display: block;
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;

      .logo {
        display: block;
        width: 300px;
        transition: 0.3s all;
      }

      &.sticky {
        background: #fff;
        box-shadow: -5px 14px 12px -15px rgba(0, 0, 0, 0.65);
        transition: 0.3s all;

        .logo {
          width: 150px;
          transition: 0.3s all;
        }

        .nav {
          padding: 15px;
          align-items: center;
          display: flex;
          transition: 0.3s all;

          ul.navbar {
            margin-bottom: 0;
            transition: 0.3s all;

            li {
              margin: 0 20px;
              transition: 0.3s all;
              padding-bottom: 0;
            }
          }
        }
      }
    }
  }
`

export const Header = ({ sticky }: Props) => {
  return (
    <StyledHeader
      className={`main-navbar ${sticky ? "sticky" : ""}`}
      id="main-nav"
    >
      <div className="logo">
        <Logo />
      </div>
    </StyledHeader>
  )
}

Header.propTypes = {
  sticky: PropTypes.bool.isRequired,
  siteTitle: PropTypes.string.isRequired,
}

import React from "react"
import PropTypes from "prop-types"
import Logo from "../Logo"
import LogoWhite from "../LogoWhite"
import styled from "styled-components"

interface Props {
  sticky: boolean
  siteTitle: string
}

const StyledHeader = styled.header`
  padding: 20px 12px;

  &.main-navbar {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    z-index: 9;
    transition: 0.3s all;

    .logo {
      display: block;
      width: 180px;
      margin: 0;
    }

    .right-menus {
      display: flex;
      align-items: center;
      margin: 0 32px;

      * {
        color: #fff;
        cursor: pointer;
        transition: all 0.4s;
        margin: 0 auto;

        &:hover {
          color: #c5283f;
          transition: all 0.4s;
        }
      }

      .menus {
        display: grid;
        grid-template-columns: 100px 100px 100px 100px;
        align-items: center;
      }

      .lets-talk {
        padding: 12px 32px;
        margin: 0 24px;
        border: 2px solid #fff;

        &:hover {
          border-color: #c5283f;
          transition: all 0.4s;
        }
      }
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;

      .logo {
        display: block;
        transition: 0.3s all;
        width: 300px;
        margin: 0 32px;
      }

      &.sticky {
        background: #c5283f;
        box-shadow: -5px 14px 12px -15px rgba(0, 0, 0, 0.65);
        transition: 0.3s all;

        .logo {
          transition: 0.3s all;
        }

        .right-menus {
          * {
            color: #fff;
            cursor: pointer;
            transition: all 0.4s;

            &:hover {
              color: #f26f82;
              transition: all 0.4s;
            }
          }

          .lets-talk {
            &:hover {
              border-color: #f26f82;
              transition: all 0.4s;
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
      <div className="logo">{sticky ? <LogoWhite /> : <Logo />}</div>
      <div className="right-menus">
        <div className="menus">
          <div>About</div>
          <div>Services</div>
          <div>Client</div>
          <div>Showcase</div>
        </div>
        <div className="lets-talk">Let's talk</div>
      </div>
    </StyledHeader>
  )
}

Header.propTypes = {
  sticky: PropTypes.bool.isRequired,
  siteTitle: PropTypes.string.isRequired,
}

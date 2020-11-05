import React from "react"
import styled from "styled-components"

interface IProps {
  isTop: boolean
}

const StyledWrapper = styled.div`
  .container {
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 12;

    &.red {
      background-color: #c5283f;
    }
  }

  .logo {
    cursor: pointer;
    margin-left: 60px;
    display: flex;
    align-items: center;
    img {
      width: 180px;
    }
  }

  .menu {
    display: flex;
    align-items: center;
    margin-right: 70px;

    .li {
      margin: 5px 18px;
      color: #fff;
      font-size: 17px;
      cursor: pointer;
    }

    .let-talk {
      border: 2px solid #fff;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 153px;
      height: 45px;
      font-weight: bold;
      font-size: 17px;
      cursor: pointer;
    }
  }
`

const defaultProps: IProps = {
  isTop: true,
}

const Header = (props: IProps) => {
  return (
    <StyledWrapper>
      <div className={`container ${props.isTop ? "white" : "red"}`}>
        <div className="logo">
          <img
            src={`/images/${props.isTop ? "logo_color" : "logo_white"}.png`}
            alt="logo"
          />
        </div>
        <div className="menu">
          <div className="li">About</div>
          <div className="li">Services</div>
          <div className="li">Client</div>
          <div className="li">Showcase</div>
          <div className="let-talk">Let’s talk</div>
        </div>
      </div>
    </StyledWrapper>
  )
}

Header.defaultProps = defaultProps
export default Header

import React from "react"
import styled from "styled-components"

interface IProps {}

const StyledWrapper = styled.div`
  background-color: #fff;
  padding: 0 120px;
  width: 100%;
  height: 109px;
  display: flex;
  align-items: center;

  .logo {
    height: 70px;
    img {
      height: 70px;
    }
  }
`

const defaultProps: IProps = {}

const Footer = (props: IProps) => {
  return (
    <StyledWrapper>
      <div className="logo">
        <img src="/images/logo_color.png" alt="" />
      </div>
    </StyledWrapper>
  )
}

Footer.defaultProps = defaultProps
export default Footer

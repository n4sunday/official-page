import React from "react"
import styled from "styled-components"

interface IProps {}

const StyledWrapper = styled.div`
  background-color: #c5283f;
  padding: 90px 120px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  .header {
    font-weight: 600;
    font-size: 40px;
    line-height: 120%;
    color: #ffffff;
  }

  .content {
    margin-top: 20px;
    margin-bottom: 30px;
    width: 363px;
    font-weight: normal;
    font-size: 18px;
    line-height: 145%;
    text-align: right;
    color: #ffffff;
  }

  .more {
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    text-decoration-line: underline;
    color: #ffffff;
  }
`

const defaultProps: IProps = {}

const WithUs = (props: IProps) => {
  return (
    <StyledWrapper>
      <div className="header">Work with us</div>
      <div className="content">
        As we speak, our company have been strive to be the best in a company
        that serve your need whenever, whatever you’ll need in your business
      </div>
      <div className="more">See our opening position</div>
    </StyledWrapper>
  )
}

WithUs.defaultProps = defaultProps
export default WithUs

import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;

  .wrapper-about {
    display: flex;
    justify-content: space-between;

    .about {
      width: 100%;
      position: relative;
      position: relative;

      .box-text-background {
        position: absolute;
        right: 0;
        height: 100%;
        z-index: ;
        margin-right: -230px;
        display: flex;
        align-items: center;

        img {
          height: 413px;
        }
      }

      .box-about-text {
        display: flex;
        position: absolute;
        z-index: 10;
        right: 0;
        height: 100%;
        margin-right: -90px;
        flex-direction: column;
        justify-content: center;

        img {
          height: 310px;
          margin-bottom: 25px;
        }

        .text {
          font-weight: 500;
          font-size: 20px;
          line-height: 145%;
          color: #2f2f2f;
        }
      }
    }

    .wrapper-img {
      z-index: 9;

      img {
        height: 700px;
      }
    }
  }

  .wrapper-brandner {
    margin: 70px 0;

    .text-brandner {
      display: flex;
      justify-content: center;
      font-size: 30px;
    }

    .icon-partners {
      margin-top: 42px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 364px;
      }
    }
  }
`

const About = () => {
  return (
    <StyledWrapper>
      <div className="wrapper-about">
        <div className="about">
          <div className="box-text-background">
            <img src="/images/about 01.png" alt="" />
          </div>
          <div className="box-about-text">
            <img src="/images/about 02.png" alt="" />
            <div className="text">As we speak, our company have been</div>
            <div className="text">strive to be the best in a company</div>
          </div>
        </div>
        <div className="wrapper-img">
          <img src="/images/about.png" alt="" />
        </div>
      </div>
      <div className="wrapper-brandner">
        <div className="text-brandner">
          We’ve been working with all these brand
        </div>
        <div className="icon-partners">
          <img src="/images/partners.png" alt="" />
        </div>
      </div>
    </StyledWrapper>
  )
}

export default About

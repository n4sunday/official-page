import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    background-color: #c5283f;
    padding: 100px 0 0 0;
    display: flex;
    justify-content: center;
  }

  .wrapper-container {
  }

  .wrapper-mission {
    padding: 60px 120px;

    .title {
      color: #fff;
      font-size: 50px;
      line-height: 120%;
    }

    .content {
      margin-top: 40px;
      margin-left: 20px;
      width: 315px;
      color: #fff;
      font-size: 18px;
    }
  }

  .wrapper-mission-img {
    display: flex;
    justify-content: center;

    .img-1 {
      margin-top: 60px;
      width: 285px;
      margin-right: 34px;
    }
    .img-2 {
      margin-top: 150px;
      width: 270px;
      margin-right: 34px;
    }
    .img-3 {
      margin-top: -80px;
      width: 270px;
      margin-right: 34px;
    }
    .img-4 {
      margin-top: -270px;
      width: 270px;
    }
  }

  .wrapper-what-we-do {
    margin-top: 70px;
    width: 100vw;
    min-width: 100vw;

    .title {
      color: #fff;
      font-weight: 600;
      font-size: 40px;
      line-height: 120%;
      text-align: right;
      margin-bottom: 80px;
      padding: 0 120px;
    }
    .box-content {
      display: flex;
      margin-bottom: 110px;

      &:last-child {
        margin-bottom: 70px;
      }

      &.start {
        justify-content: flex-start;
      }

      &.end {
        justify-content: flex-end;
      }
    }

    .what-we-do-content {
      margin-right: 60px;
      display: flex;
      flex-direction: column;

      &:last-child {
        margin-right: unset;
      }

      &.start {
        align-items: flex-start;
      }

      &.end {
        align-items: flex-end;
      }

      .img-box {
        height: 270px;
        width: 400px;
        overflow: hidden;
        margin-bottom: 38px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.br-all {
          border-radius: 135.5px;
        }

        img {
          width: 450px;
        }
      }

      .header {
        font-size: 26px;
        line-height: 120%;
        color: #ffffff;
      }

      .des {
        margin-top: 20px;
        font-size: 18px;
        line-height: 145%;
        color: #ffffff;
        width: 315px;
      }
    }
  }
`

const Mission = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="wrapper-container">
          <div className="wrapper-mission">
            <div className="title">
              <div>
                <b>Our mission</b> is to
              </div>
              <span>be number one</span>
            </div>

            <div className="content">
              As we speak, our company have been strive to be the best in a
              company that serve yourr need whenever, whatever you’ll need in
              your business
            </div>

            <div className="wrapper-mission-img">
              <div className="img-1">
                <img src="/images/mission-1.png" alt="mission-1" />
              </div>
              <div className="img-2">
                <img src="/images/mission-2.png" alt="mission-1" />
              </div>
              <div className="img-3">
                <img src="/images/mission-3.png" alt="mission-1" />
              </div>
              <div className="img-4">
                <img src="/images/mission-4.png" alt="mission-1" />
              </div>
            </div>
          </div>

          <div className="wrapper-what-we-do">
            <div className="title">What we do</div>
            <div className="box-content end">
              <div className="what-we-do-content">
                <div className="img-box">
                  <img src="/images/Rectangle 11.png" alt="" />
                </div>
                <div className="header">Creative Design</div>
                <div className="des">
                  As we speak, our company have been strive to be the best in a
                  company that serve yourr need whenever
                </div>
              </div>

              <div className="what-we-do-content">
                <div className="img-box">
                  <img src="/images/Rectangle 12.png" alt="" />
                </div>
                <div className="header">Web Development</div>
                <div className="des">
                  As we speak, our company have been strive to be the best in a
                  company that serve yourr need whenever
                </div>
              </div>

              <div className="what-we-do-content">
                <div className="img-box">
                  <img src="/images/Rectangle 13.png" alt="" />
                </div>
                <div className="header">Mobile Application</div>
                <div className="des">
                  As we speak, our company have been strive to be the best in a
                  company that serve yourr need whenever
                </div>
              </div>
            </div>

            <div className="box-content start">
              <div className="what-we-do-content end">
                <div className="img-box">
                  <img src="/images/Rectangle 14.png" alt="" />
                </div>
                <div className="header">Creative Design</div>
                <div className="des">
                  As we speak, our company have been strive to be the best in a
                  company that serve yourr need whenever
                </div>
              </div>

              <div className="what-we-do-content end">
                <div className="img-box">
                  <img src="/images/Rectangle 15.png" alt="" />
                </div>
                <div className="header">Web Development</div>
                <div className="des">
                  As we speak, our company have been strive to be the best in a
                  company that serve yourr need whenever
                </div>
              </div>

              <div className="what-we-do-content end">
                <div className="img-box">
                  <img src="/images/Rectangle 16.png" alt="" />
                </div>
                <div className="header">Mobile Application</div>
                <div className="des">
                  As we speak, our company have been strive to be the best in a
                  company that serve yourr need whenever
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Mission

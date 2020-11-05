import React from "react"
import styled from "styled-components"

interface IProps {}

const StyledWrapper = styled.div`
  background-color: #fff;
  padding: 90px 0 90px 120px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .header {
    font-weight: 600;
    font-size: 40px;
    line-height: 120%;
    color: #2f2f2f;
    margin-bottom: 50px;
  }

  .article {
    padding-left: 120px;
    display: flex;
    justify-content: space-between;

    .image {
      height: 500px;
      img {
        height: 100%;
      }
    }
  }
`

const defaultProps: IProps = {}

const Article = (props: IProps) => {
  return (
    <StyledWrapper>
      <div className="header">Read what we write</div>
      <div className="article">
        <div></div>
        <div className="image">
          <img src="/images/Rectangle 17.png" alt=""/>
        </div>
      </div>
    </StyledWrapper>
  )
}

Article.defaultProps = defaultProps
export default Article

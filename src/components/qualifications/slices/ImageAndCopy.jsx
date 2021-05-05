import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const CopyImageContainer = styled.div`
  display: flex;
  margin: 60px auto;
  /* align-items: center;
  justify-content: center; */
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .copy {
    flex: 1;
    margin: 30px;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 3rem;
    }
    p,
    ul {
      margin-top: 30px;
    }
    @media screen and (max-width: 768px) {
      margin: 30px 0;
    }
  }
  .image {
    flex: 1;
    width: 100%;
  }
`

const ImageAndCopy = ({ input }) => (
  <CopyImageContainer>
    <div className="image">
      <Img fluid={input.image.localFile.childImageSharp.fluid} />
    </div>
    <div className="copy" dangerouslySetInnerHTML={{ __html: input.copy }} />
  </CopyImageContainer>
)

export default ImageAndCopy

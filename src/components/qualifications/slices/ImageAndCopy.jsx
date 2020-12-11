import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const CopyImageContainer = styled.div`
  display: flex;
  margin: 60px auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .copy {
    flex: 1;
    align-self: center;
    margin: 30px;
    @media screen and (max-width: 768px) {
      margin: 30px 0;
    }
  }
  .image {
    flex: 1;
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

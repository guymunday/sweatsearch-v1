import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import SweatSearchRepeatSvg from "../SweatSearchRepeatSvg"
import BackgroundImage from "gatsby-background-image"

const ImageSection = styled.section`
  width: 100%;
  background: var(--green);
  height: 100vh;
  min-height: 500px;
  position: relative;
  .circle-svg {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 450px;
    width: 450px;
    transform: translate(-50%, -50%);
    svg {
      width: 100%;
      height: 100%;
    }
  }
`

const BackgroundImageStyles = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const HomepageBigImage = ({ image }) => {
  const backgroundImage = [
    image,
    `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,
  ].reverse()
  return (
    <ImageSection style={{ backgroundImage: image }}>
      <BackgroundImageStyles
        Tag="section"
        fluid={backgroundImage}
        backgroundColor={`var(--black)`}
      >
        <SweatSearchRepeatSvg />
      </BackgroundImageStyles>
    </ImageSection>
  )
}

export default HomepageBigImage

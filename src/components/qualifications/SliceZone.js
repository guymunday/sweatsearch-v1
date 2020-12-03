import React, { Component } from "react"
import styled from "styled-components"
import BodyText from "./slices/BodyText"
import CopyAndImage from "./slices/CopyAndImage"
import Image from "./slices/Image"
import ImageAndCopy from "./slices/ImageAndCopy"

const Content = styled.div`
  padding: 100px 0;
`

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props
    const slice = allSlices.map(s => {
      console.log(s)
      switch (s.fieldGroupName) {
        // These are the API IDs of the slices
        case "acf_Flexible_Content_Copy":
          return <BodyText key={Math.random()} input={s.copy} />
        case "acf_Flexible_Content_Image":
          return <Image key={Math.random()} input={s.image} />
        case "acf_Flexible_Content_CopyAndImage":
          return <CopyAndImage key={Math.random()} input={s} />
        case "acf_Flexible_Content_ImageAndCopy":
          return <ImageAndCopy key={Math.random()} input={s} />
        default:
          return null
      }
    })
    return <Content>{slice}</Content>
  }
}

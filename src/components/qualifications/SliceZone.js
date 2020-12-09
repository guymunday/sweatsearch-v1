import React, { Component } from "react"
import styled from "styled-components"
import BodyText from "./slices/BodyText"
import CopyAndImage from "./slices/CopyAndImage"
import Image from "./slices/Image"
import ImageAndCopy from "./slices/ImageAndCopy"

const Content = styled.div`
  padding: 100px 0 0 0;
`

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props
    const slice = allSlices.map(s => {
      switch (s.fieldGroupName) {
        // These are the API IDs of the slices
        case "acf_Flexible_Content_Copy":
          return s.copy ? <BodyText key={Math.random()} input={s.copy} /> : null
        case "acf_Flexible_Content_Image":
          return s.image ? <Image key={Math.random()} input={s.image} /> : null
        case "acf_Flexible_Content_CopyAndImage":
          return s ? <CopyAndImage key={Math.random()} input={s} /> : null
        case "acf_Flexible_Content_ImageAndCopy":
          return s ? <ImageAndCopy key={Math.random()} input={s} /> : null
        default:
          return null
      }
    })
    return <Content>{slice}</Content>
  }
}

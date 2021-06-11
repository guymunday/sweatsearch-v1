import React, { Component } from "react"
import styled from "styled-components"
import SplitHero from "../SplitHero"
import HomepageAbout from "../homepage/HomepageAbout"
import HomepagePlans from "../homepage/HomepagePlans"
import HomepageBigImage from "../homepage/HomepageBigImage"
import HomepageThumbnails from "../homepage/HomepageThumbnails"
import FullbleedCircles from "../FullbleedCircles"
import FullbleedBlocks from "../FullbleedBlocks"
import BenefitsSection from "../theSystem/BenefitsSection"
import ClientsSection from "../theSystem/ClientsSection"
import CirclesSection from "../CirclesSection"
import Newsletter from "../Newsletter"
import ClientPt from "../referralSystem/ClientPt"
import ImageAndCopy from "./slices/ImageAndCopy"
import Wrapper from "../Wrapper"
import CopyAndImage from "./slices/CopyAndImage"
import BasicTitle from "../BasicTitle"
import HomepageHero from "../homepage/HomepageHero"

const Content = styled.div``

export default class SliceZone extends Component {
  render() {
    const { allSlices, title } = this.props
    const slice = allSlices.map((s, i) => {
      switch (s.fieldGroupName) {
        case "content_page_AcfContent_ContentBlocks_HomepageHero":
          return <HomepageHero key={i} input={s} />
        case "content_page_AcfContent_ContentBlocks_SplitImageHero":
          return <SplitHero key={i} input={s} title={title} />
        case "content_page_AcfContent_ContentBlocks_AppImageAndButtons":
          return <HomepageAbout key={i} input={s} />
        case "content_page_AcfContent_ContentBlocks_PlansThumbnails":
          return <HomepagePlans key={i} input={s} />
        case "content_page_AcfContent_ContentBlocks_BigImage":
          return (
            <HomepageBigImage key={i} image={s?.image?.localFile?.publicURL} />
          )
        case "content_page_AcfContent_ContentBlocks_Thumbnails":
          return <HomepageThumbnails key={i} input={s} />
        case "content_page_AcfContent_ContentBlocks_FullBleedCirclesSection":
          return <FullbleedCircles key={i} input={s} />
        case "content_page_AcfContent_ContentBlocks_FullBleedBlockSection":
          return <FullbleedBlocks key={i} input={s} />
        case "content_page_AcfContent_ContentBlocks_BenefitsSection":
          return <BenefitsSection key={i} input={s} />
        case "content_page_AcfContent_ContentBlocks_BlockSection":
          return <ClientsSection key={i} input={s} />
        case "content_page_AcfContent_ContentBlocks_CircleSection":
          return <CirclesSection key={i} input={s} />
        case "content_page_AcfContent_ContentBlocks_Newsletter":
          return <Newsletter key={i} input={s} />
        case "content_page_AcfContent_ContentBlocks_BasicThumbnails":
          return <ClientPt key={i} input={s} />
        case "content_page_AcfContent_ContentBlocks_ImageAndCopy":
          return (
            <Wrapper key={i}>
              <ImageAndCopy key={i} input={s} />
            </Wrapper>
          )
        case "content_page_AcfContent_ContentBlocks_CopyAndImage":
          return (
            <Wrapper key={i}>
              <CopyAndImage input={s} />
            </Wrapper>
          )
        case "content_page_AcfContent_ContentBlocks_BasicPageTitle":
          return (
            <Wrapper key={i}>
              <BasicTitle title={title} />
            </Wrapper>
          )
        default:
          return null
      }
    })
    return <Content>{slice}</Content>
  }
}

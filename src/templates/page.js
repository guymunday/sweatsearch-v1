import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import SliceZone from "../components/qualifications/SliceZone"

export const Title = styled.div`
  padding: 150px 0 0 0;
  h1 {
    position: relative;
    font-size: 5rem;
    z-index: 2;
    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
    svg {
      position: absolute;
      left: 0;
      top: -30%;
      z-index: -1;
    }
  }
`

const PageTemplate = ({ data }) => {
  return (
    <Layout whiteLogo>
      <SliceZone
        allSlices={data?.page?.acf_content?.contentBlocks}
        title={data?.page?.title}
      />
    </Layout>
  )
}

export default PageTemplate

export const PAGE_QUERY = graphql`
  query PageQuery($slug: String!) {
    page: wpContentPage(slug: { eq: $slug }) {
      slug
      title
      id
      acf_content {
        contentBlocks {
          ... on WpContent_page_AcfContent_ContentBlocks_HomepageHero {
            copy
            fieldGroupName
            buttons {
              button {
                link
                text
                icon {
                  localFile {
                    publicURL
                  }
                }
              }
            }
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          ... on WpContent_page_AcfContent_ContentBlocks_BasicPageTitle {
            basicHero
            fieldGroupName
          }
          ... on WpContent_page_AcfContent_ContentBlocks_AppImageAndButtons {
            fieldGroupName
            paragraph
            title
            appImage {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          ... on WpContent_page_AcfContent_ContentBlocks_PlansThumbnails {
            fieldGroupName
            plansThumbnails {
              plans {
                description
                fieldGroupName
                button {
                  link
                  text
                  icon {
                    localFile {
                      publicURL
                    }
                  }
                }
                planType
                price
              }
            }
          }
          ... on WpContent_page_AcfContent_ContentBlocks_BigImage {
            fieldGroupName
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          ... on WpContent_page_AcfContent_ContentBlocks_Thumbnails {
            fieldGroupName
            thumbnails {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              information
              title
            }
          }
          ... on WpContent_page_AcfContent_ContentBlocks_FullBleedCirclesSection {
            copy
            fieldGroupName
            link
            title
            backgroundImage {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          ... on WpContent_page_AcfContent_ContentBlocks_FullBleedBlockSection {
            copy
            fieldGroupName
            link
            title
            backgroundImage {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          ... on WpContent_page_AcfContent_ContentBlocks_BenefitsSection {
            fieldGroupName
            title
            backgroundImage {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            thumbnails {
              thumbnail
            }
          }
          ... on WpContent_page_AcfContent_ContentBlocks_BlockSection {
            copy
            fieldGroupName
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          ... on WpContent_page_AcfContent_ContentBlocks_CircleSection {
            copy
            fieldGroupName
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          ... on WpContent_page_AcfContent_ContentBlocks_Newsletter {
            copy
            fieldGroupName
          }
          ... on WpContent_page_AcfContent_ContentBlocks_SplitImageHero {
            fieldGroupName
            introParagraph
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          ... on WpContent_page_AcfContent_ContentBlocks_BasicThumbnails {
            fieldGroupName
            thumbnails {
              copy
            }
          }
          ... on WpContent_page_AcfContent_ContentBlocks_ImageAndCopy {
            copy
            fieldGroupName
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          ... on WpContent_page_AcfContent_ContentBlocks_CopyAndImage {
            copy
            fieldGroupName
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import HomepageHero from "../components/homepage/HomepageHero"
import HomepageAbout from "../components/homepage/HomepageAbout"
import HomepagePlans from "../components/homepage/HomepagePlans"
import HomepageBigImage from "../components/homepage/HomepageBigImage"
import HomepageThumbnails from "../components/homepage/HomepageThumbnails"
import FullbleedSections from "../components/homepage/FullbleedSections"
import Newsletter from "../components/Newsletter"

const IndexPage = ({ data: { home } }) => {
  return (
    <Layout whiteLogo={true}>
      <HomepageHero data={home.nodes[0].homepage.heroSection} />
      <HomepageAbout data={home.nodes[0].homepage.whatIsSweatsearch} />
      <HomepagePlans data={home.nodes[0].homepage.plans} />
      <HomepageBigImage
        image={home.nodes[0].homepage.image.localFile.childImageSharp.fluid}
      />
      <HomepageThumbnails data={home.nodes[0].homepage.thumbnails} />
      <FullbleedSections sections={home.nodes[0].homepage.fullBleedSections} />
      <Newsletter />
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query HomeQuery {
    home: allWpAcf(filter: { slug: { eq: "homepage" } }) {
      nodes {
        id
        homepage {
          fullBleedSections {
            section {
              link
              title
              copy
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
          heroSection {
            paragraph
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
          plans {
            plan {
              bulletPoints
              description
              link
              planType
              price
            }
          }
          thumbnails {
            info
            title
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
          whatIsSweatsearch {
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
        }
      }
    }
  }
`

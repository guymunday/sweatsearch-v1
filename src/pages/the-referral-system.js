import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SplitHero from "../components/SplitHero"
import Newsletter from "../components/Newsletter"
import CirclesSection from "../components/CirclesSection"
import ClientPt from "../components/referralSystem/ClientPt"
import RatingSystem from "../components/referralSystem/RatingSystem"

const ReferralSystem = ({ data: { referral } }) => {
  return (
    <Layout>
      <SplitHero
        image={
          referral.nodes[0].heroSection.hero.image.localFile.childImageSharp
            .fluid
        }
        title={referral.nodes[0].title}
        copy={referral.nodes[0].heroSection.hero.introParagraph}
      />
      <ClientPt data={referral.nodes[0].referral.clientPt} />
      <CirclesSection
        copy={referral.nodes[0].referral.credits.copy}
        image={
          referral.nodes[0].referral.credits.image.localFile.childImageSharp
            .fluid
        }
      />
      <RatingSystem
        image={
          referral.nodes[0].referral.ratingSystem.appImage.localFile
            .childImageSharp.fluid
        }
        copy={referral.nodes[0].referral.ratingSystem.copy}
      />
      <Newsletter />
    </Layout>
  )
}

export default ReferralSystem

export const referralQuery = graphql`
  query RefQuery {
    referral: allWpAcf(filter: { slug: { eq: "the-referral-system" } }) {
      nodes {
        id
        title
        slug
        referral {
          clientPt {
            copy
          }
          credits {
            copy
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
          ratingSystem {
            copy
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
        heroSection {
          hero {
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
        }
      }
    }
  }
`

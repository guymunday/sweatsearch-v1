import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SplitHero from "../components/SplitHero"
import CirclesSection from "../components/CirclesSection"
import ClientsSection from "../components/theSystem/ClientsSection"
import BenefitsSection from "../components/theSystem/BenefitsSection"
import Newsletter from "../components/Newsletter"

const TheSystem = ({ data: { system } }) => {
  console.log(system)
  return (
    <Layout>
      <SplitHero
        image={
          system.nodes[0].heroSection.hero.image.localFile.childImageSharp.fluid
        }
        title={system.nodes[0].title}
        copy={system.nodes[0].heroSection.hero.introParagraph}
      />
      <ClientsSection
        copy={system.nodes[0].system.clients.copy}
        image={
          system.nodes[0].system.clients.image.localFile.childImageSharp.fluid
        }
      />
      <CirclesSection
        copy={system.nodes[0].system.trainers.copy}
        image={
          system.nodes[0].system.trainers.image.localFile.childImageSharp.fluid
        }
      />
      <BenefitsSection
        background={
          system.nodes[0].system.benefits.backgroundImage.localFile
            .childImageSharp.fluid
        }
        copy={system.nodes[0].system.benefits.benefits}
      />
      <Newsletter />
    </Layout>
  )
}

export default TheSystem

export const systemQuery = graphql`
  query SystemPageQuery {
    system: allWpAcf(filter: { slug: { eq: "the-system" } }) {
      nodes {
        slug
        id
        title
        system {
          trainers {
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
          clients {
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
          benefits {
            benefits {
              benefit
            }
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

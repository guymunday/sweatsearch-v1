import React from "react"
import Layout from "../components/Layout"
import Wrapper from "../components/Wrapper"
import PageTitle from "../components/PageTitle"
import { graphql } from "gatsby"
import BodyText from "../components/qualifications/slices/BodyText"
import useGeoLocation from "react-ipgeolocation"
import Seo from "gatsby-plugin-wpgraphql-seo"

const Policy = ({ data }) => {
  const location = useGeoLocation()

  return (
    <Layout >
      <Seo post={data?.allWpPolicy?.edges[0]?.node} />
      <Wrapper>
        <PageTitle>{data?.allWpPolicy?.edges[0]?.node?.title}</PageTitle>
        <BodyText
          input={
            location.country === "GB"
              ? data?.allWpPolicy?.edges[0]?.node?.content
              : data?.allWpPolicy?.edges[0]?.node?.policy?.australianPolicy
          }
        />
      </Wrapper>
    </Layout>
  )
}
export default Policy

export const policyQuery = graphql`
  query polQuery($slug: String!) {
    allWpPolicy(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          seo {
            canonical
            title
            metaDesc
            focuskw
            metaRobotsNoindex
            metaRobotsNofollow
            opengraphAuthor
            opengraphDescription
            opengraphTitle
            opengraphDescription
            opengraphImage {
              altText
              sourceUrl
              srcSet
            }
            opengraphUrl
            opengraphSiteName
            opengraphPublishedTime
            opengraphModifiedTime
            twitterTitle
            twitterDescription
            twitterImage {
              altText
              sourceUrl
              srcSet
            }
            breadcrumbs {
              url
              text
            }
            cornerstone
            schema {
              pageType
              articleType
              raw
            }
            readingTime
            fullHead
          }
          id
          slug
          title
          content
          uri
          policy {
            australianPolicy
          }
        }
      }
    }
  }
`

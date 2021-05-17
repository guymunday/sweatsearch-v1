import React from "react"
import Layout from "../components/Layout"
import Wrapper from "../components/Wrapper"
import PageTitle from "../components/PageTitle"
import { graphql } from "gatsby"
import BodyText from "../components/qualifications/slices/BodyText"
import useGeoLocation from "react-ipgeolocation"

const Policy = ({ data }) => {
  const location = useGeoLocation()

  return (
    <Layout>
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

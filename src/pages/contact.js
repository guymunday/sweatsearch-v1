import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Newsletter from "../components/Newsletter"
import ContactFormSeven from "../components/ContactForm7"

const Contact = ({ data }) => {
  return (
    <Layout monoLogo={true}>
      <ContactFormSeven contactCopy={data?.contact?.content} />
      <Newsletter />
    </Layout>
  )
}

export default Contact

export const CONTACT_DATA = graphql`
  query ContactQuery {
    contact: wpAcf(slug: { eq: "contact" }) {
      content
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Newsletter from "../components/Newsletter"
import ContactFormSeven from "../components/ContactForm7"
import { Helmet } from "react-helmet"

const Contact = ({ data }) => {
  return (
    <Layout monoLogo={true}>
      <Helmet>
        <title>Contact | SweatSearch</title>
      </Helmet>
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

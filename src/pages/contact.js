import React from "react"
import Layout from "../components/Layout"
import Newsletter from "../components/Newsletter"
import ContactFormSeven from "../components/ContactForm7"

const Contact = () => {
  return (
    <Layout monoLogo={true}>
      <ContactFormSeven />
      <Newsletter />
    </Layout>
  )
}

export default Contact

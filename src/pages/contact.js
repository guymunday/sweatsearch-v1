import React from "react"
import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import Newsletter from "../components/Newsletter"

const Contact = () => {
  return (
    <Layout monoLogo={true}>
      <ContactForm />
      <Newsletter />
    </Layout>
  )
}

export default Contact

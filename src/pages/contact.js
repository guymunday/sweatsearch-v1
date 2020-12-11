import React from "react"
import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import Newsletter from "../components/Newsletter"
import ContactFormSeven from "../components/ContactForm7"

const Contact = () => {
  return (
    <Layout monoLogo={true}>
      {/* <ContactForm /> */}
      <ContactFormSeven />
      <Newsletter />
    </Layout>
  )
}

export default Contact

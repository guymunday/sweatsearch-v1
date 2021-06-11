import { navigate } from "gatsby-link"
import React from "react"
import Layout from "../components/Layout"

const NotFoundPage = () => {
  React.useEffect(() => {
    navigate("/")
  })

  return <Layout></Layout>
}

export default NotFoundPage

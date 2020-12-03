import React from "react"
import Img from "gatsby-image"

const Image = ({ input }) => (
  <Img
    fluid={input.localFile.childImageSharp.fluid}
    style={{ margin: "60px auto" }}
  />
)

export default Image

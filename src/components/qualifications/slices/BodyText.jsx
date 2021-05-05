import React from "react"
import styled from "styled-components"

export const BodyContent = styled.div`
  max-width: 780px;
  margin: 60px 0;
  *:not(li) {
        margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
  p {
    margin: 30px auto;
  }
`

const BodyText = ({ input }) => (
  <BodyContent dangerouslySetInnerHTML={{ __html: input }} />
)

export default BodyText

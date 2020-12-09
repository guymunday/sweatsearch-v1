import React from "react"
import styled from "styled-components"

const WrapperContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
`
const Wrapper = ({ children }) => {
  return <WrapperContainer>{children}</WrapperContainer>
}

export default Wrapper

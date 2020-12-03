import React from "react"
import styled from "styled-components"
import Wrapper from "./Wrapper"

const StyledFooter = styled.footer`
  background: var(--black);
`

const FooterInner = styled.div`
  color: var(--white);
`

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <FooterInner>Footer</FooterInner>
      </Wrapper>
    </StyledFooter>
  )
}

export default Footer

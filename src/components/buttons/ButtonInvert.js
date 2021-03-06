import React from "react"
import styled from "styled-components"
import Ripple from "./Ripple"
import { Link } from "gatsby"

const ButtonStyled = styled(Link)`
  overflow: hidden;
  outline: none;
  position: relative;
  cursor: pointer;
  display: inline-block;
  border: 1px solid var(--black);
  padding: 12px 28px;
  color: var(--black);
  border-radius: 23px;
  text-align: center;
  line-height: 1;
  text-decoration: none;
  :hover {
    color: var(--white);
    background: var(--black);
  }
`

function ButtonInvert({ link, children, ...rest }) {
  return (
    <ButtonStyled to={link} {...rest}>
      {children} <Ripple color={"#fff"} duration={1000} />
    </ButtonStyled>
  )
}

export default ButtonInvert

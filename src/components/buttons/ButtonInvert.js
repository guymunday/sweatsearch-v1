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
`

function ButtonInvert({ link, children }) {
  return (
    <ButtonStyled to={link}>
      {children} <Ripple color={"#000"} duration={1000} />
    </ButtonStyled>
  )
}

export default ButtonInvert

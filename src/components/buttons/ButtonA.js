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
  background: var(--black);
  border: none;
  padding: 12px 28px;
  color: var(--white);
  border-radius: 23px;
  text-align: center;
  line-height: 1;
  text-decoration: none;
`

function ButtonA({ link, children }) {
  return (
    <ButtonStyled href={link}>
      {children} <Ripple color={"#fff"} duration={1000} />
    </ButtonStyled>
  )
}

export default ButtonA
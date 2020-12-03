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
  background: var(--green);
  padding: 12px 18px;
  color: var(--black);
  border-radius: 23px;
  text-align: center;
  line-height: 1;
  text-decoration: none;
`

function Button({ link, children }) {
  return (
    <ButtonStyled to={link}>
      {children} <Ripple color={"#fff"} duration={1000} />
    </ButtonStyled>
  )
}

export default Button

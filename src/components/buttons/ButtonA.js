import React from "react"
import styled from "styled-components"
import Ripple from "./Ripple"

const ButtonStyled = styled.a`
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
  :hover {
    color: var(--black);
    background: var(--green);
  }
`

function ButtonA({ link, children }) {
  return (
    <ButtonStyled href={link} rel="noreferrer" target="_blank">
      {children} <Ripple color={"#fff"} duration={1000} />
    </ButtonStyled>
  )
}

export default ButtonA

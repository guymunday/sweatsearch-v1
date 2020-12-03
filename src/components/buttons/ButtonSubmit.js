import React from "react"
import styled from "styled-components"
import Ripple from "./Ripple"

const ButtonStyled = styled.input`
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
  border: none;
  transition: 0.4s ease;
  :hover {
    background: var(--white);
  }
`

function ButtonSubmit() {
  return <ButtonStyled type="submit" />
}

export default ButtonSubmit

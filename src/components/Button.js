import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ButtonStyle = styled(Link)`
  background: var(--green);
  color: var(--black);
  text-decoration: none;
  padding: 12px 18px;
  border-radius: 23px;
  display: inline-block;
  line-height: 1;
`

const Button = ({ link, text }) => {
  return <ButtonStyle to={`/${link}`}>{text}</ButtonStyle>
}

export default Button

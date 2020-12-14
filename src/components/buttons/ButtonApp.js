import React from "react"
import styled from "styled-components"
import Ripple from "./Ripple"

const ButtonStyled = styled.a`
  overflow: hidden;
  outline: none;
  position: relative;
  cursor: pointer;
  display: inline-block;
  background: var(--green);
  padding: 12px 28px;
  color: var(--black);
  border-radius: 23px;
  text-align: center;
  line-height: 1;
  text-decoration: none;
  :hover {
    color: var(--white);
    background: var(--black);
    svg {
      fill: var(--white);
    }
  }
  svg {
    display: inline-block;
    height: 0.85rem;
    transition: 0.3s ease;
    margin-right: 0.5rem;
  }
`

function ButtonApp({ link }) {
  return (
    <ButtonStyled href={link} target="_blank" rel="noreferrer">
      <svg x="0px" y="0px" viewBox="0 0 582.1 514.22">
        <path
          d="M290,46.36l16.2-28c10-17.5,32.3-23.4,49.8-13.4s23.4,32.3,13.4,49.8l-156.1,270.2h112.9
	c36.6,0,57.1,43,41.2,72.8h-331c-20.2,0-36.4-16.2-36.4-36.4c0-20.2,16.2-36.4,36.4-36.4h92.8L248,119.06l-37.1-64.4
	c-10-17.5-4.1-39.6,13.4-49.8c17.5-10,39.6-4.1,49.8,13.4L290,46.36L290,46.36z M149.6,435.26l-35,60.7
	c-10,17.5-32.3,23.4-49.8,13.4s-23.4-32.3-13.4-49.8l26-45C106.8,405.46,130.7,412.46,149.6,435.26L149.6,435.26z M451,325.16h94.7
	c20.2,0,36.4,16.2,36.4,36.4c0,20.2-16.2,36.4-36.4,36.4h-52.6l35.5,61.6c10,17.5,4.1,39.6-13.4,49.8c-17.5,10-39.6,4.1-49.8-13.4
	c-59.8-103.7-104.7-181.3-134.5-233c-30.5-52.6-8.7-105.4,12.8-123.3C367.6,180.66,403.3,242.56,451,325.16L451,325.16z"
        />
      </svg>
      Download App <Ripple color={"#fff"} duration={1000} />
    </ButtonStyled>
  )
}

export default ButtonApp

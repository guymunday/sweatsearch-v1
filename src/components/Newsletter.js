import React from "react"
import styled from "styled-components"
import ButtonSubmit from "./buttons/ButtonSubmit"

const NewsletterContainer = styled.section`
  background: var(--black);
  padding: 100px;
  margin: 100px;
  color: var(--white);
  text-align: center;
`

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <h3>Subscribe to the newsletter</h3>
      <form>
        <input type="email" name="email" />
        <ButtonSubmit
          onClick={e => {
            e.preventDefault()
          }}
        />
      </form>
    </NewsletterContainer>
  )
}

export default Newsletter

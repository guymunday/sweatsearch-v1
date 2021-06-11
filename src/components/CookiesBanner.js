import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import CookieConsent from "react-cookie-consent"

export default function CookiesBanner() {
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Okay"
        cookieName="cookies"
        disableStyles={true}
        containerClasses="cookies-container"
        buttonWrapperClasses="cookies-buttons"
        contentClasses="cookies-inner"
      >
        <>
          This site uses cookies. <Link to="/cookies-policy">Learn more.</Link>
        </>
      </CookieConsent>
    </>
  )
}

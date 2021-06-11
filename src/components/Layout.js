import React, { useState, useEffect } from "react"
import { createGlobalStyle } from "styled-components"
import reset from "../assets/styles/reset"
import global from "../assets/styles/global"
import Header from "./Header"
import Footer from "./Footer"
import Helmet from "react-helmet"
import favicon from "../assets/icon-48x48.png"

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${global}
    `

const Layout = ({ children, whiteLogo, monoLogo }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const html = typeof window !== "undefined" && document.querySelector("html")

  useEffect(() => {
    menuOpen
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "visible")
  })

  return (
    <>
      <GlobalStyles />
      <Helmet>
        <title>SweatSearch</title>
        <link rel="icon" href={favicon} type="image/png" />
      </Helmet>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        whiteLogo={whiteLogo}
        monoLogo={monoLogo}
      />
      <main style={{ overflow: "hidden" }}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

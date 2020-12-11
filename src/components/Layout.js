import React, { useState, useEffect } from "react"
import { createGlobalStyle } from "styled-components"
import reset from "../assets/styles/reset"
import global from "../assets/styles/global"
import Header from "./Header"
import Footer from "./Footer"

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
  }, [menuOpen])

  return (
    <>
      <GlobalStyles />
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        whiteLogo={whiteLogo}
        monoLogo={monoLogo}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

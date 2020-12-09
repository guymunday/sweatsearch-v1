import React, { useState } from "react"
import { createGlobalStyle } from "styled-components"
import reset from "../assets/styles/reset"
import global from "../assets/styles/global"
import Header from "./Header"
import Footer from "./Footer"
import Navigation from "./Navigation"
import { AnimatePresence } from "framer-motion"

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${global}
    `

const Layout = ({ children, whiteLogo, monoLogo }) => {
  const [menuOpen, setMenuOpen] = useState(false)

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

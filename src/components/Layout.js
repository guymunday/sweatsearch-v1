import React from "react"
import { createGlobalStyle } from "styled-components"
import reset from "../assets/styles/reset"
import global from "../assets/styles/global"
import Header from "./Header"

const Layout = ({ children }) => {
  const GlobalStyles = createGlobalStyle`
    ${reset}
    ${global}
    `

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout

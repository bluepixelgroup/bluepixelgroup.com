import React from "react"
import Menu from "./Menu"
import Footer from "./Footer"
import CTA from "./CTA"

export default ({ children }) => {
  return (
    <React.Fragment>
      <Menu />
      {children}
      <CTA/>
      <Footer />
    </React.Fragment>
  )
}

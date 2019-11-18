import React from "react"
import Menu from "./Menu"
import Footer from "./Footer"
import CTA from "./CTA"

import { Container } from "@material-ui/core"

export default ({ children }) => {
  return (
    <React.Fragment>
      <Container>
        <Menu />
      </Container>
      {children}
      <CTA/>
      <Container>
        <Footer />
      </Container>
    </React.Fragment>
  )
}

import React from "react"
import Menu from "./Menu"
import Footer from "./Footer"

import {Container} from "@material-ui/core";
import "./layout.scss"

export default ({ children }) => {
  return (
    <React.Fragment>
      <Container>
        <Menu/>
      </Container>
      { children }
      <Container>
        <Footer/>
      </Container>
    </React.Fragment>
  )
}

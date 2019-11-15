import React from "react"
import Menu from "./Menu"

import {Container} from "@material-ui/core";
import "./layout.scss"

export default ({ children }) => {
  return (
    <React.Fragment>
      <Container>
        <Menu/>
      </Container>
      { children }
    </React.Fragment>
  )
}

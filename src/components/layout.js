import React from "react"
import Menu from "./Menu"

import "./layout.scss"

export default ({ children }) => {
  return (
    <React.Fragment>
      <Menu/>
      { children }
    </React.Fragment>
  )
}

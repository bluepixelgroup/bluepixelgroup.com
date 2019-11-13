import React from "react"
import { Link } from "gatsby"
import { Button } from "@material-ui/core"

import BluePixelLogo from '../assets/images/logo.svg'

export default () => {
  return (
    <header>
      <BluePixelLogo/>
      <Link to="/">SERVICES</Link>
      <Link to="/">CLIENTS</Link>
      <Link to="/">TEAM</Link>
      <Link to="/">CONTACT US</Link>
      <Button variant="outlined" color="primary">START A PROJECT</Button>
    </header>
  )
}

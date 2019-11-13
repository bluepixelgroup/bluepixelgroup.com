import React from "react"
import { Link } from "gatsby"
import { Grid, Button } from "@material-ui/core"

import BluePixelLogo from "../assets/images/logo.svg"

import "./Menu.scss"

export default () => {
  return (
    <header className="menu">
      <Grid container direction="row" alignItems="center" justify="space-between">
        <Grid item>
          <Link to="/">
            <BluePixelLogo/>
          </Link>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center" spacing={2}>
            <Grid item className="menu-item">
              <Link to="/">SERVICES</Link>
            </Grid>
            <Grid item className="menu-item">
              <Link to="/">CLIENTS</Link>
            </Grid>
            <Grid item className="menu-item">
              <Link to="/">TEAM</Link>
            </Grid>
            <Grid item className="menu-item">
              <Link to="/">CONTACT US</Link>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">START A PROJECT</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </header>
  )
}

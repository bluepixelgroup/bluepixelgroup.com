import React from "react"
import { Link } from "gatsby"
import { Grid, Button } from "@material-ui/core"

import BluePixelLogo from '../assets/images/logo.svg'

export default () => {
  return (
    <header>
      <Grid container direction="row" alignItems="center" justify="space-between">
        <Grid item>
          <Link to="/">
            <BluePixelLogo/>
          </Link>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center" spacing={3}>
            <Grid item>
              <Link to="/">SERVICES</Link>
            </Grid>
            <Grid item>
              <Link to="/">CLIENTS</Link>
            </Grid>
            <Grid item>
              <Link to="/">TEAM</Link>
            </Grid>
            <Grid item>
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

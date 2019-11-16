import React from "react"
import { Link } from "gatsby"
import { Grid, List, ListSubheader, ListItem } from "@material-ui/core"

import BluePixelLogo from "../assets/images/logo.inline.svg"

const FooterColumn = props => {
  return (
    <List
      disablePadding
      subheader={
        <ListSubheader disableGutters>{props.headerTitle}</ListSubheader>
      }
    >
      {props.items.map((item, idx) => (
        <ListItem disableGutters key={idx}>
          {item}
        </ListItem>
      ))}
    </List>
  )
}

export default () => {
  return (
    <React.Fragment>
      <Grid container direction="row">
        <Grid item lg={3}>
          <BluePixelLogo />
        </Grid>
        <Grid item lg={3}>
          <FooterColumn
            headerTitle="CAPABILITIES"
            items={[
              <Link to="/">Development</Link>,
              <Link to="/">Prototyping</Link>,
              <Link to="/">Maintainance</Link>,
            ]}
          />
        </Grid>
        <Grid item lg={3}>
          <FooterColumn
            headerTitle="CLIENTS"
            items={[
              <Link to="/">Showcases</Link>,
              <Link to="/">Testimonials</Link>,
            ]}
          />
        </Grid>
        <Grid item lg={3}>
          <FooterColumn
            headerTitle="COMPANY"
            items={[
              <Link to="/">About us</Link>,
              <Link to="/">Contanct us</Link>,
              <Link to="/">Blog</Link>,
            ]}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

import React from "react"
import { Link } from "gatsby"
import { Grid, List, ListSubheader, ListItem } from "@material-ui/core"

import BluePixelLogo from "../assets/images/logo.inline.svg"

import './Footer.scss'

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
              <Link className="footer-link" to="/">Development</Link>,
              <Link className="footer-link" to="/">Prototyping</Link>,
              <Link className="footer-link" to="/">Maintainance</Link>,
            ]}
          />
        </Grid>
        <Grid item lg={3}>
          <FooterColumn
            headerTitle="CLIENTS"
            items={[
              <Link className="footer-link" to="/">Showcases</Link>,
              <Link className="footer-link" to="/">Testimonials</Link>,
            ]}
          />
        </Grid>
        <Grid item lg={3}>
          <FooterColumn
            headerTitle="COMPANY"
            items={[
              <Link className="footer-link" to="/">About us</Link>,
              <Link className="footer-link" to="/">Contanct us</Link>,
              <Link className="footer-link" to="/">Blog</Link>,
            ]}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

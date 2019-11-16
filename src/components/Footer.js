import React from "react"
import { Link } from "gatsby"
import { Grid, List, ListSubheader, ListItem } from "@material-ui/core"

import BluePixelLogo from "../assets/images/logo.inline.svg"
import FacebookIcon from "../assets/images/facebookicon.inline.svg"
import LinkedInIcon from "../assets/images/linkedinicon.inline.svg"
import TwitterIcon from "../assets/images/twittericon.inline.svg"
import GithubIcon from "../assets/images/githubicon.inline.svg"

import "./Footer.scss"

const FooterColumn = props => {
  return (
    <List
      dense
      disablePadding
    >
      <ListItem disableGutters>
        <h6>{props.headerTitle}</h6>
      </ListItem>
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
    <footer className="footer">
      <Grid container direction="row" spacing={3}>
        <Grid item container lg={6} md={4} xs={12}>
          <Grid item md={12}>
            <BluePixelLogo />
          </Grid>
          <Grid item md={12}>
            <p className="value-proposition">
              Helping companies realizing their ambitions
            </p>
            <div className="email-address">
              <a href="mailto:hello@bluepixelgroup.com">
                hello@bluepixelgroup.com
              </a>
            </div>
          </Grid>
        </Grid>
        <Grid item container lg={6} md={8} xs={12} spacing={3}>
          <Grid item lg={4} md={4} sm={4} xs={6}>
            <FooterColumn
              headerTitle="CAPABILITIES"
              items={[
                <Link className="footer-link" to="/">
                  Development
                </Link>,
                <Link className="footer-link" to="/">
                  Prototyping
                </Link>,
                <Link className="footer-link" to="/">
                  Maintainance
                </Link>,
              ]}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={6}>
            <FooterColumn
              headerTitle="CLIENTS"
              items={[
                <Link className="footer-link" to="/">
                  Showcases
                </Link>,
                <Link className="footer-link" to="/">
                  Testimonials
                </Link>,
              ]}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={6}>
            <FooterColumn
              headerTitle="COMPANY"
              items={[
                <Link className="footer-link" to="/">
                  About us
                </Link>,
                <Link className="footer-link" to="/">
                  Contanct us
                </Link>,
                <Link className="footer-link" to="/">
                  Blog
                </Link>,
              ]}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="space-between" className="info-links-container">
        <Grid item xs={12} sm={6} md={5} lg={7}>
          <a>
            <LinkedInIcon />
          </a>
          <a>
            <TwitterIcon />
          </a>
          <a>
            <FacebookIcon />
          </a>
          <a>
            <GithubIcon />
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={"auto"}>
          <span className="small-text">© 2019 Blue Pixel. All rights reserved.</span>
        </Grid>
        <Grid item xs={12} sm={6} md={"auto"}>
          <Link className="footer-link small-text" to="/">
            Privacy Policy
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={"auto"}>
          <Link className="footer-link small-text" to="/">
            Cookie Policy
          </Link>
        </Grid>
      </Grid>
    </footer>
  )
}

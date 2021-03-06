import React from "react";
import { Link } from "gatsby";
import {
  Grid, List, ListItem, Container, IconButton,
  Link as MUILink,
} from "@material-ui/core";

import { handleDrift } from "../utils";

import "./Footer.scss";
import BluePixelLogo from "../assets/images/logo.inline.svg";
import FacebookIcon from "../assets/images/facebookicon.inline.svg";
import LinkedInIcon from "../assets/images/linkedinicon.inline.svg";
import TwitterIcon from "../assets/images/twittericon.inline.svg";
import GithubIcon from "../assets/images/githubicon.inline.svg";


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
};

export default () => {
  return (
    <Container>
      <footer className="footer">
        <Grid container direction="row" spacing={3} justify="space-between">
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
          <Grid item container lg={6} md={7} xs={12} spacing={3} justify="space-between">
            <Grid item>
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
                    Maintenance
                  </Link>,
                ]}
              />
            </Grid>
            <Grid item>
              <FooterColumn
                headerTitle="CLIENTS"
                items={[
                  <Link className="footer-link" to="/case-studies">
                    Showcases
                  </Link>,
                  <Link className="footer-link" to="/case-studies/#testimonials">
                    Testimonials
                  </Link>,
                ]}
              />
            </Grid>
            <Grid item>
              <FooterColumn
                headerTitle="COMPANY"
                items={[
                  <Link className="footer-link" to="/">
                    About us
                  </Link>,
                  <MUILink className="footer-link" href="#" onClick={handleDrift}>
                    Contact us
                  </MUILink>,
                  <a
                    className="footer-link"
                    href="https://medium.com/bluepixelio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>,
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="space-between" className="info-links-container">
          <Grid item xs={12} sm={6} md={5} lg={7}>
            <IconButton
              size="small"
              href="https://linkedin.com/company/bluepixelgroup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              size="small"
              href="https://twitter.com/bluepixelgroup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              size="small"
              href="https://www.facebook.com/bluepixelgroup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              size="small"
              href="https://github.com/bluepixelgroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </IconButton>
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
    </Container>
  )
}

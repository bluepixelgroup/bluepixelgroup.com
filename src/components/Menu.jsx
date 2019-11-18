import React from "react"
import { Link } from "gatsby"
import {
  Grid,
  Button,
  Drawer,
  List,
  ListItem,
  IconButton,
  Hidden,
} from "@material-ui/core"

import BluePixelLogo from "../assets/images/logo.inline.svg"
import HamburgerIcon from "../assets/images/hamburger.inline.svg"
import CloseHamburgerIcon from "../assets/images/close-hamburger.inline.svg"

import "./Menu.scss"

export default class Menu extends React.Component {
  state = {
    drawerOpened: false,
  }

  toggleDrawer = opened => {
    this.setState({ drawerOpened: opened })
  }

  renderMobileMenu = () => {
    let { drawerOpened } = this.state

    return (
      <header className="menu">
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid item>
            <Link to="/">
              <BluePixelLogo />
            </Link>
          </Grid>
          <Grid item>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={() => this.toggleDrawer(true)}
            >
              <HamburgerIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Drawer
          anchor="top"
          open={drawerOpened}
          onClick={() => this.toggleDrawer(false)}
        >
          <Grid
            container
            direction="column"
            justify="center"
            className="mobile-menu"
          >
            <Grid item>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Link to="/">
                    <BluePixelLogo />
                  </Link>
                </Grid>
                <Grid item>
                  <CloseHamburgerIcon
                    onClick={() => {
                      this.toggleDrawer(false)
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <List>
                <ListItem className="mobile-menu-item">
                  <Link to="/">SERVICES</Link>
                </ListItem>
                <ListItem className="mobile-menu-item">
                  <Link to="/">CLIENTS</Link>
                </ListItem>
                <ListItem className="mobile-menu-item">
                  <Link to="/">TEAM</Link>
                </ListItem>
                <ListItem className="mobile-menu-item">
                  <Link to="/">CONTACT US</Link>
                </ListItem>
                <ListItem className="mobile-menu-item">
                  <Button variant="outlined" color="primary">
                    START A PROJECT
                  </Button>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Drawer>
      </header>
    )
  }

  renderDesktopMenu = () => {
    return (
      <header className="menu">
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid item>
            <Link to="/">
              <BluePixelLogo />
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
                <Button variant="outlined" color="primary">
                  START A PROJECT
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </header>
    )
  }

  render() {
    return (
      <React.Fragment>
        <Hidden only={['xs', 'sm']}>
          { this.renderDesktopMenu() }
        </Hidden>
        <Hidden only={['md', 'lg', 'xl']}>
          { this.renderMobileMenu() }
        </Hidden>
      </React.Fragment>
    )
  }
}

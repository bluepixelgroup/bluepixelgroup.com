import React from "react";
import { Link } from "gatsby";
import {
  Grid,
  Button,
  Drawer,
  List,
  ListItem,
  IconButton,
  Hidden,
  Container,
  Link as MUILink,
} from "@material-ui/core";

import "./Menu.scss";
import BluePixelLogo from "../assets/images/logo.inline.svg";
import HamburgerIcon from "../assets/images/hamburger.inline.svg";
import CloseHamburgerIcon from "../assets/images/close-hamburger.inline.svg";


export default class Menu extends React.Component {
  state = {
    drawerOpened: false,
  };

  toggleDrawer = opened => {
    this.setState({ drawerOpened: opened })
  };

  handleDrift = (event) => {
    event.preventDefault();

    window.drift && window.drift.on('ready', (api) => {
      api.openChat();
    });
  };

  renderMobileMenu = () => {
    let { drawerOpened } = this.state;

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
                  <Link to="/#technology">SERVICES</Link>
                </ListItem>
                <ListItem className="mobile-menu-item">
                  <Link to="/#capabilities">CAPABILITIES</Link>
                </ListItem>
                <ListItem className="mobile-menu-item">
                  <Link to="/case-studies">CLIENTS</Link>
                </ListItem>
                <ListItem className="mobile-menu-item">
                  <Link to="/#team">TEAM</Link>
                </ListItem>
                <ListItem className="mobile-menu-item">
                  <MUILink href="#" onClick={this.handleDrift}>CONTACT US</MUILink>
                </ListItem>
                <ListItem className="mobile-menu-item">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    href={this.props.typeformURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                <Link to="/#technology">SERVICES</Link>
              </Grid>
              <Grid item className="menu-item">
                <Link to="/#capabilities">CAPABILITIES</Link>
              </Grid>
              <Grid item className="menu-item">
                <Link to="/case-studies">CLIENTS</Link>
              </Grid>
              <Grid item className="menu-item">
                <Link to="/#team">TEAM</Link>
              </Grid>
              <Grid item className="menu-item">
                <MUILink href="#" onClick={this.handleDrift}>CONTACT US</MUILink>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  href={this.props.typeformURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  START A PROJECT
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </header>
    )
  };

  render() {
    return (
      <Container>
        <Hidden only={['xs', 'sm']}>
          { this.renderDesktopMenu() }
        </Hidden>
        <Hidden only={['md', 'lg', 'xl']}>
          { this.renderMobileMenu() }
        </Hidden>
      </Container>
    )
  }
}

import React from "react";
import { Link } from "gatsby";

import { Container, Button, Grid } from "@material-ui/core";
import Taken from "../assets/images/taken.inline.svg";

import "./NotFound.scss";


export default () => {
  return (
    <Container>
      <Grid
        container
        justify="center"
        alignItems="center"
        className="not-found-container"
        spacing={8}
      >
        <Grid item className="message-container" xs={12} sm={6} md={"auto"}>
          <h3 className="spaced-evenly">Oops! The page you were looking for does not exist.</h3>
          <p className="spaced-evenly">You may have misstyped the address or the page may have moved.</p>
          <Button
            className="spaced-evenly"
            component={Link}
            href="/"
            variant="contained"
            color="primary"
            size="small"
          >
            Go to homepage
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={"auto"}>
          <Taken/>
        </Grid>
      </Grid>
    </Container>
  )
}

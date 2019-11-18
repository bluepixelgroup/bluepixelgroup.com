import React from 'react';

import Typewriter from "typewriter-effect";
import Container from "@material-ui/core/Container";
import {Button} from "@material-ui/core"
import Grid from "@material-ui/core/Grid";

import GoogleSVG from "../assets/images/landing-hero/google.inline.svg";
import DigitalOceanSVG
  from "../assets/images/landing-hero/digital-ocean.inline.svg";
import AmazonSVG from "../assets/images/landing-hero/aws.inline.svg";
import AzureSVG from "../assets/images/landing-hero/azure.inline.svg";
import "./Hero.scss";

export default () => {
  return (
    <div className="hero">
      <Container>
        <div className="content-wrapper">
          <h1>
            The fastest and most convenient way to&nbsp;
            <span className="typings">
              <Typewriter
                options={{
                  strings: ['deliver your software.',
                    'build great products.',
                    'something else here.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <div>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will
            uncover.
          </div>
          <Button variant="contained" color="primary"
                  className="btn-start-project">
            start a project
          </Button>
          <div className="btn-info">* Free quote for your project</div>
        </div>
        <div className="building-on">
          <h6>Building on:</h6>
          <Grid container
                direction="row"
                justify="space-between"
                alignItems="center"
                className="cloud-providers"
          >
            <Grid container item xs={6} sm={3} spacing={3}>
              <AmazonSVG className="cloud-icon"/>
            </Grid>
            <Grid container item xs={6} sm={3} spacing={3}>
              <DigitalOceanSVG className="cloud-icon"/>
            </Grid>
            <Grid container item xs={6} sm={3} spacing={3}>
              <GoogleSVG className="cloud-icon"/>
            </Grid>
            <Grid container item xs={6} sm={3} spacing={3}>
              <AzureSVG className="cloud-icon"/>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}
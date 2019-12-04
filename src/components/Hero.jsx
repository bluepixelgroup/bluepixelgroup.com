import React from 'react';
import Typewriter from "typewriter-effect";
import Container from "@material-ui/core/Container";
import {Button} from "@material-ui/core"
import Grid from "@material-ui/core/Grid";

import { handleCTAClick } from "../utils";

import "./Hero.scss";
import GoogleSVG from "../assets/images/landing-hero/google.inline.svg";
import DigitalOceanSVG from "../assets/images/landing-hero/digital-ocean.inline.svg";
import AmazonSVG from "../assets/images/landing-hero/aws.inline.svg";
import AzureSVG from "../assets/images/landing-hero/azure.inline.svg";


export default ({ typeformURL }) => {
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
                    'launch your MVP.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p>
            We are committed to meeting the expectations of our customers. We achieve this by mixing
            technology and innovation to deliver the best experience.
          </p>
          <Button
            variant="contained"
            color="primary"
            className="btn-start-project"
            href={typeformURL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => handleCTAClick(e, 'Hero CTA', typeformURL)}
          >
            Start a project
          </Button>
          <small className="btn-info">* Free quote for your project</small>
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

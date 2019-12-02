import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Separator from "./common/Separator";

import './OneStop.scss';
import * as ModularIcon from '../assets/images/icons/modular.svg';
import * as CustomizableIcon from '../assets/images/icons/customizable.svg';
import * as ScalableIcon from '../assets/images/icons/scalable.svg';
import * as ResponsiveIcon from '../assets/images/icons/responsive.svg';



const OneStop = () => (
  <React.Fragment>
    <Separator />
    <section className="section-one-stop" id="capabilities">
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          spacing={8}
        >
          <Grid item xs={12} md={6}>
            <h2>One Stop, Deep Insights.</h2>
            <p>
              Whether as partner who builds your projects from idea to end-product or as a project-oriented team
              that realizes everything you need in the most effective way.
            </p>
            <p>
              We plan and deliver over multiple milestones, for a fixed price. Regardless if you only
              got an idea or ready UI designs, we execute our job following a transparent process.
            </p>
            <Button
              variant="contained"
              color="primary"
              className="btn-start-project"
            >
              Get free quota
            </Button>
            <small>* We usually respond within 48h</small>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              spacing={3}
            >
              <Item
                icon={ModularIcon}
                title="Modular"
                details="Creating UI components that independent and reusable."
              />
              <Item
                icon={CustomizableIcon}
                title="Customizable"
                details="Easily customizable so that you create your unique style guide."
              />
              <Item
                icon={ScalableIcon}
                title="Scalable"
                details="Quickly scale your product while maintaining consistency."
              />
              <Item
                icon={ResponsiveIcon}
                title="Responsive"
                details="All elements are fully responsive so they work on any device."
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  </React.Fragment>
);

const Item = ({icon, title, details}) => (
  <Grid item xs={12} sm={6}>
    <div className="one-stop-item">
      <img src={icon} alt={title} />
      <h6>{title}</h6>
      <p>{details}</p>
    </div>
  </Grid>
);

export default OneStop;

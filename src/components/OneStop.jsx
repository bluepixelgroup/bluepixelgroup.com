import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Separator from "./Separator";

import './OneStop.scss';
import * as ModularIcon from '../assets/images/icons/modular.svg';
import * as CustomizableIcon from '../assets/images/icons/customizable.svg';
import * as ScalableIcon from '../assets/images/icons/scalable.svg';
import * as ResponsiveIcon from '../assets/images/icons/responsive.svg';



const OneStop = () => (
  <React.Fragment>
    <Separator />
    <section className="section-one-stop">
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={5}>
            <h2>One Stop, Deep Insights.</h2>
            <p>Whether as your partner who accompanies your projects.</p>
            <p>
              A product planned and delivered by us over multiple milestones for a fixed price. Regardless if you only got
              an idea or ready UI designs - we execute for you following a transparent process.
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
          <Grid item xs={12} sm={5}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Item
                icon={ModularIcon}
                title="Modular"
                details="Combine symbols to create multiple UI components."
              />
              <Item
                icon={CustomizableIcon}
                title="Customizable"
                details="Shared styles and Symbols can be customized easily."
              />
              <Item
                icon={ScalableIcon}
                title="Scalable"
                details="Quickly scale your design while maintaining consistency."
              />
              <Item
                icon={ResponsiveIcon}
                title="Responsive"
                details="UI elements are optimised for resizing for most devices."
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  </React.Fragment>
);

const Item = ({icon, title, details}) => (
  <Grid item xs={6}>
    <img src={icon} alt={title} />
    <h6>{title}</h6>
    <p>{details}</p>
  </Grid>
);

export default OneStop;

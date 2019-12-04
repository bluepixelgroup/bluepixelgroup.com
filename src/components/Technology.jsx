import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import Section from "./common/Section";
import Separator from "./common/Separator";

import "./Technology.scss";
import * as CloudIcon from "../assets/images/icons/b-cloud.svg";
import * as ClientIcon from "../assets/images/icons/f-platform.svg";
import * as ReactIcon from "../assets/images/icons/react.svg";
import * as VueIcon from "../assets/images/icons/vue.svg";
import * as JavaScriptIcon from "../assets/images/icons/js.svg";
import * as ApiIcon from "../assets/images/icons/API.svg";
import * as SquareCloudIcon from "../assets/images/icons/Cloud.svg";


const Technology = () => (
  <React.Fragment>
    <Separator />
    <Section
      title="Our Technology"
      subtitle="State-of-the-art technology to grow your business."
      className="technology"
      id="technology"
    >
      <div className="wrapper">
        <Container>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            spacing={8}
          >
            <Grid item sm={12} md={6}>
              <div>
                <div className="h5">
                  <img
                    src={CloudIcon}
                    className="valign-middle"
                    alt="Backend Cloud or custom API"
                    style={{marginRight: 15}}
                  /> API
                </div>
                <h5 style={{marginTop: 15, marginBottom: 25}}>
                  Introducing the API to go beyond
                </h5>
                <p>
                  Building the API for your services, like other programming skills is part art, part science.
                </p>

                <BackTechItem
                  icon={SquareCloudIcon}
                  title="Cloud APIs"
                  details="We use already existing back-end architecture, such as Firebase and Parse, for building intensive and feature-rich applications."
                />
                <BackTechItem
                  icon={ApiIcon}
                  title="Custom APIs"
                  details="Complicated as it may sound, creating a custom API service is actually quite easy. The go-to when everything else is not working for you. (Python, Django, Flask or Node.js)"
                />
              </div>
            </Grid>
            <Grid item sm={12} md={6}>
              <div>
                <div className="h5 text-blue">
                  <img
                    src={ClientIcon}
                    className="valign-middle"
                    alt="Frontend Desktop or Mobile"
                    style={{marginRight: 15}}
                  /> Client
                </div>
                <h5 className="text-blue" style={{marginTop: 15, marginBottom: 25}}>
                  Introducing the frontend toolbox to go beyond
                </h5>
                <p>
                  The client-side development that we do, ranges from building Web Applications all the way mobile
                  so that a user can see and interact with your product directly.
                </p>

                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="stretch"
                  style={{marginTop: 35}}
                  spacing={3}
                >
                  <ClientTechItem
                    icon={ReactIcon}
                    lang="React.js"
                    details="We use it to create reusable UI components which present data that changes over time."
                  />
                  <ClientTechItem
                    icon={VueIcon}
                    lang="Vue.js"
                    details="Helps us build awesome Single-Page Applications from ground to top floor."
                  />
                  <ClientTechItem
                    icon={JavaScriptIcon}
                    lang="JavaScript"
                    details="We take pride in building the most lightweight libraries that satisfy your needs."
                  />
                  <ClientTechItem
                    icon={ReactIcon}
                    lang="React Native"
                    details="We combine the best parts of native development with React, to build your mobile apps."
                  />
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Section>
  </React.Fragment>
);


const ClientTechItem = ({icon, lang, details}) => (
  <Grid item xs={6}>
    <img src={icon} alt={lang} style={{height: 48}} />
    <h6>{lang}</h6>
    <p>{details}</p>
  </Grid>
);

const BackTechItem = ({icon, title, details}) => (
  <Paper>
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      style={{
        marginTop: 35,
        padding: '10px 10px 10px 20px',
        fontSize: 16,
      }}
      spacing={3}
    >
      <Grid item xs={3} sm={2}>
        <img
          src={icon}
          alt={title}
          style={{
            width: '100%',
            maxWidth: 80
          }}
        />
      </Grid>
      <Grid item xs={9} sm={10}>
        <h6>{title}</h6>
        <p>{details}</p>
      </Grid>
    </Grid>
  </Paper>
);

export default Technology;

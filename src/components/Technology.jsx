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
      subtitle="State-of-the-art lorem ipsum ot grow your business."
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
                  The passage is attributed to an unknown typesetter in the 15th century who is thought to have Malorum
                  for use in a type specimen book.
                </p>

                <BackTechItem
                  icon={ApiIcon}
                  title="WordPress APIs"
                  details="The Wordpress API stands for the WordPress Application Programming Interfce."
                />
                <BackTechItem
                  icon={SquareCloudIcon}
                  title="Cloud APIs"
                  details="The Wordpress API stands for the WordPress Application Programming Interfce."
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
                  Introducing the client to go beyond
                </h5>
                <p>
                  The passage is attributed to an unknown typesetter in the 15th century who is thought to have Malorum
                  for use in a type specimen book.
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
                    details="Reference site about Lorem Ipsum, giving information."
                  />
                  <ClientTechItem
                    icon={VueIcon}
                    lang="Vue.js"
                    details="Reference site about Lorem Ipsum, giving information."
                  />
                  <ClientTechItem
                    icon={JavaScriptIcon}
                    lang="JavaScript"
                    details="Reference site about Lorem Ipsum, giving information."
                  />
                  <ClientTechItem
                    icon={ReactIcon}
                    lang="React Native"
                    details="Reference site about Lorem Ipsum, giving information."
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

import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Section from "../components/Section";
import "./Technology.scss";



const Technology = () => (
  <Section className="technology" title="Our Technology" subtitle="State-of-the-art lorem ipsum ot grow your buisiness.">
    <div className="wrapper">
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={5}>
            <div>
              <div className="h5">API</div>
              <h5>Introducing the API to go beyond</h5>
              <p>
                The passage is attributed to an unknown typesetter in the 15th century who is thought to have Malorum for
                use in a type specimen book.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={5}>
            <div>
              <div className="h5 text-blue">Client</div>
              <h5 className="text-blue">Introducing the client to go beyond</h5>
              <p>
                The passage is attributed to an unknown typesetter in the 15th century who is thought to have Malorum for
                use in a type specimen book.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  </Section>
);

export default Technology;

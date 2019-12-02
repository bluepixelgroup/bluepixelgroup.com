import React from "react";
import { Link } from "gatsby";
import { Container, Grid, Button } from "@material-ui/core";

import "./CTA.scss";


export default ({ typeformURL }) => {
  return (
    <div className="cta">
      <Container>
        <Grid container justify="space-between">
          <Grid item xs={12} md={8}>
            <h4>Interested? Have any projects?</h4>
            <p className="text-black">
              Get everything you need to build your amazing product. We have the best tech talent to make your vision
              feasible!
            </p>
          </Grid>
          <Grid item>
            <Grid container direction="column" alignItems="flex-end">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  href={typeformURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start a project
                </Button>
              </Grid>
              <Grid item className="contact-link-container">
                <span className="text-black">
                  or <Link className="contact-link" to="/">contact us</Link>
                </span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

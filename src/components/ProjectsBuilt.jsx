import React from 'react';
import Container from "@material-ui/core/Container";

import Section from "../components/Section";
import Separator from "./Separator";

import "./Technology.scss";


const ProjectsBuilt = () => (
  <React.Fragment>
    <Separator />
    <Section
      title="Projects built by us"
      subtitle="State-of-the-art lorem ipsum ot grow your business. JavaScript class that can be used to quickly create animations that display numerical."
      className="projects-built"
    >
      <div className="wrapper">
        <Container>

        </Container>
      </div>
    </Section>
  </React.Fragment>
);

export default ProjectsBuilt;

import React from 'react';
import Container from "@material-ui/core/Container";

import Section from "../components/Section";
import Separator from "./Separator";

import * as TeamSVG from "../assets/images/team.svg";
import "./Team.scss";


const Team = () => (
  <React.Fragment>
    <Separator />
    <Section
      title="Our Team"
      subtitle="State-of-the-art lorem ipsum ot grow your business. JavaScript class that can be used to quickly create animations that display numerical."
      className="team"
    >
      <Container>
        <img src={TeamSVG} alt="Team Members" />
      </Container>
    </Section>
  </React.Fragment>
);

export default Team;
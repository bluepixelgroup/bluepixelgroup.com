import React from 'react';
import Container from "@material-ui/core/Container";

import Section from "./common/Section";
import Separator from "./common/Separator";

import * as TeamSVG from "../assets/images/team.svg";
import "./Team.scss";


const Team = () => (
  <React.Fragment>
    <Separator />
    <Section
      title="Our Team"
      subtitle="Our team is your team. We know you need the best people to build your vision, so we've got your back! Get to know your team below."
      className="team"
      id="team"
    >
      <Container>
        <img src={TeamSVG} alt="Team Members" />
      </Container>
    </Section>
  </React.Fragment>
);

export default Team;

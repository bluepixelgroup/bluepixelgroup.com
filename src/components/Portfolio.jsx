import React from 'react';
import {Link} from "gatsby";
import Container from "@material-ui/core/Container";
import {Button} from "@material-ui/core";

import Section from "../components/Section";
import Separator from "./Separator";

import PortfolioGrid from "./PortfolioGrid";
import "./Portfolio.scss";


const Portfolio = ({data, seeMoreButton}) => {
  return (
    <React.Fragment>
      <Separator/>
      <Section
        title="Projects built by us"
        subtitle="State-of-the-art lorem ipsum ot grow your business. JavaScript class that can be used to quickly create animations that display numerical."
        className="projects-built"
      >
        <Container>
          <PortfolioGrid data={data}/>
          {seeMoreButton? <div className="see-more-wrapper">
            <Button component={Link} to="/case-studies" variant="outlined" color="primary" size="large">
              SEE MORE PROJECTS
            </Button>
          </div> : "" }
        </Container>
      </Section>
    </React.Fragment>
  )
};

export default Portfolio;

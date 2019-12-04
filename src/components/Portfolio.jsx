import React from 'react';
import {Link} from "gatsby";
import Container from "@material-ui/core/Container";
import {Button} from "@material-ui/core";

import Section from "./common/Section";
import Separator from "./common/Separator";

import PortfolioGrid from "./PortfolioGrid";
import "./Portfolio.scss";


const Portfolio = ({data, seeMoreButton}) => {
  return (
    <React.Fragment>
      <Separator/>
      <Section
        title="Projects built by us"
        subtitle="We are all excited to show our work and share with you our amazing experiences we had during the development stages of each project."
        className="projects-built"
        id="portfolio"
      >
        <Container>
          <PortfolioGrid data={data}/>
          {
            seeMoreButton &&
            <div className="see-more-wrapper">
              <Button
                component={Link}
                to="/case-studies/#portfolio"
                variant="outlined"
                color="primary"
                size="large"
              >
                See more projects
              </Button>
            </div>
          }
        </Container>
      </Section>
    </React.Fragment>
  )
};

export default Portfolio;

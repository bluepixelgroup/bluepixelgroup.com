import React from 'react';
import cx from "classnames";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";

import Section from "./common/Section";
import Separator from "./common/Separator";
import TestimonialCard from "./common/TestimonialCard";

import "./Testimonials.scss";
import ArrowRightSVG from "../assets/images/icons/arrow-right.inline.svg";
import ArrowLeftSVG from "../assets/images/icons/arrow-left.inline.svg";



class Testimonials extends React.Component {

  constructor(props) {
    super(props);

    const data = props.data.allMarkdownRemark.edges.reduce((groups, item) => {
      if (!item.node.frontmatter.testimonial) {
        return groups;
      }

      if (!groups.length || groups[groups.length - 1].length === 2) {
        groups.push([item])
      } else {
        groups[groups.length - 1].push(item);
      }
      return groups;
    }, []);

    this.state = {
      currentPage: 0,
      direction: 'left',
      testimonials: data,
    };
  }

  handleNext = () => {
    const { currentPage, testimonials } = this.state;

    this.setState({
      direction: 'left',
      currentPage: (currentPage + 1) % testimonials.length,
    })
  };

  handleBack = () => {
    const { currentPage, testimonials } = this.state;

    this.setState({
      direction: 'right',
      currentPage: currentPage - 1 >= 0 ? currentPage - 1 : testimonials.length - 1,
    })
  };

  render() {
    const { currentPage, direction, testimonials } = this.state;

    return (
      <React.Fragment>
        <Separator />
        <Section
          title="Testimonials"
          subtitle="What people are saying about us"
          className="testimonials"
          id="testimonials"
        >
          <Container>
            <div className="carousel-wrapper">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="stretch"
                spacing={3}
                className="controls"
              >
                {
                  testimonials.length > 1 &&
                  <Grid item xs={12} sm={12} md={8}>
                    <ArrowLeftSVG
                      alt="arrow back"
                      onClick={this.handleBack}
                      style={{marginRight: 30}}
                    />
                    <ArrowRightSVG
                      alt="arrow forward"
                      onClick={this.handleNext}
                    />
                  </Grid>
                }
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="stretch"
                spacing={3}
              >
                {
                  testimonials[currentPage].map((data, index) => (
                    <Grid item xs={12} sm={6} md={4} key={`${currentPage}-${index}`}>
                      <Slide direction={direction} in={true} mountOnEnter unmountOnExit>
                        <TestimonialCard
                          testimonial={data.node.frontmatter.testimonial}
                          author={data.node.frontmatter.author}
                        />
                      </Slide>
                    </Grid>
                  ))
                }
              </Grid>
              {
                testimonials.length > 1 &&
                <div className="indicators">
                  {
                    testimonials.map((_, index) => (
                      <span className={cx("bullet", {active: index === currentPage})} key={index}/>
                    ))
                  }
                </div>
              }
            </div>
          </Container>
        </Section>
      </React.Fragment>
    );
  }
}

export default Testimonials;

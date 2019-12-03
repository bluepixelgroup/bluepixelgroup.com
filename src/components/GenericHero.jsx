import React from 'react';
import {Link} from "gatsby";
import Container from "@material-ui/core/Container";
import {Button} from "@material-ui/core"

import "./GenericHero.scss";

export default ({sectionTitle, title, subtitle, buttonTitle, onButtonClick, anchorLink}) => {
  let button = <Button variant="contained" color="primary"
                       className="hero-btn" onClick={onButtonClick}>
                  {buttonTitle}
               </Button>;

  if (anchorLink) {
    button = <Button component={Link} to={anchorLink} variant="contained" color="primary"
                     className="hero-btn" onClick={onButtonClick}>
      {buttonTitle}
    </Button>;
  }

  return (
    <div className="generic-hero">
      <Container>
        <div className="content-wrapper">
          <div className="section-title">{sectionTitle}</div>
          <h1>
            {title}
          </h1>
          <p>
            {subtitle}
          </p>
          {button}
        </div>
      </Container>
    </div>
  )
}

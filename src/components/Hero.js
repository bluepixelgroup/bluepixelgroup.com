import React from 'react';

import Typewriter from "typewriter-effect";
import Container from "@material-ui/core/Container";

import {Button} from "@material-ui/core"
import "./Hero.scss";

export default () => {
  return (
    <div className="hero">
      <Container>
        <div className="content-wrapper">
          <h1>
            The fastest and most convenient way to&nbsp;
            <span className="typings">
              <Typewriter
                options={{
                  strings: ['deliver your software.',
                    'build great products.',
                    'something else here.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <div>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will
            uncover.
          </div>
          <Button variant="contained" color="primary"
                  className="btn-start-project">
            start a project
          </Button>
          <div className="btn-info">* Free quote for your project</div>
        </div>
      </Container>
    </div>
  )
}

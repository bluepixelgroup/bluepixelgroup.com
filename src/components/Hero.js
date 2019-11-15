import React from 'react';

import Typing from "react-typing-animation";
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
            <Typing className="typings">
              <span>deliver your software.</span>
              <Typing.Backspace count={22} delay={400}/>
              <span>build great products.</span>
              <Typing.Backspace count={21} delay={400}/>
              <span>something else here.</span>
            </Typing>
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

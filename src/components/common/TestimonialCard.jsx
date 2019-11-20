import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/es/Grid/Grid";

import Avatar from "./Avatar";


class TestimonialCard extends React.Component {
  render() {
    const { testimonial, author } = this.props;

    return (
      <Paper
        elevation={2}
        style={{
          padding: '20px 25px',
          height: '100%',
        }}
      >
        <p>{testimonial}</p>
        <Grid container wrap="nowrap" spacing={2} justify="center" alignItems="center">
          <Grid item>
            <Avatar name={author.name} image={author.image} />
          </Grid>
          <Grid item xs>
            <div className="h6">{author.name}</div>
            <p>{author.role} at {author.company}</p>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default TestimonialCard;

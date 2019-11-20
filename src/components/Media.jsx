import React from 'react';
import Img from "gatsby-image/withIEPolyfill";

import Grid from "@material-ui/core/Grid";
import "./Media.scss";


const Media = ({projectName, data}) => {
  // console.log("alexddddddd", data);
  return (
    <div className="media-container">
      <h5>Media</h5>
      <div className="grid-container">
        <Grid container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              className="media-grid"
              spacing={6}
        >
          {data.map((img, index) => (
            <Grid item xs={6} sm={4} key={index}>
              <div className="media-item-wrapper">
                <a href={img.publicURL} target="_blank" rel="noopener noreferrer">
                  <Img fluid={img.childImageSharp.fluid} alt={projectName} className="media-image" objectFit="cover" objectPosition="0 0"/>
                  {/*<img src={img.publicURL} alt={projectName} className="media-image"/>*/}
                </a>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
};

export default Media;

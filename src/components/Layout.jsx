import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Menu from "./Menu";
import Footer from "./Footer";
import CTA from "./common/CTA";


export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          typeformURL
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Menu typeformURL={data.site.siteMetadata.typeformURL} />
      {children}
      <CTA typeformURL={data.site.siteMetadata.typeformURL} />
      <Footer />
    </React.Fragment>
  )
}

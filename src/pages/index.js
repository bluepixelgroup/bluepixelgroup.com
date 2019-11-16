import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero";

import '../assets/styles/_main.scss';

export default () => {
  return (
    <React.Fragment>
      <Layout>
        <Hero/>
      </Layout>
    </React.Fragment>
  )
}

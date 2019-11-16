import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero";

import Technology from "../components/Technology";
import '../assets/styles/_main.scss';


export default () => {
  return (
    <React.Fragment>
      <Layout>
        <Hero/>
        <Technology />
      </Layout>
    </React.Fragment>
  )
}

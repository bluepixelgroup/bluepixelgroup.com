import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero";

import '../assets/styles/_main.scss';
import { Container } from "@material-ui/core";
import Technology from "../components/Technology";


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

import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero";
import Technology from "../components/Technology";
import ProjectsBuilt from "../components/ProjectsBuilt";
import OneStop from "../components/OneStop";
import Team from "../components/Team";

import '../assets/styles/_main.scss';


export default () => {
  return (
    <React.Fragment>
      <Layout>
        <Hero/>
        <Technology />
        <ProjectsBuilt/>
        <OneStop />
        <Team />
      </Layout>
    </React.Fragment>
  )
}
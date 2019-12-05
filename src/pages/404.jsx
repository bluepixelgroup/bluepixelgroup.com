import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/common/SEO";
import NotFound from "../components/NotFound";

import '../assets/styles/style.scss';


export default () => {
  return (
    <Layout>
      <SEO/>
      <NotFound/>
    </Layout>
  )
}

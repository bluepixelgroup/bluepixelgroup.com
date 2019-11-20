import React from 'react';

import './Section.scss';


const Section = ({title, subtitle, className, ...props}) => (
  <section className={className}>
    <h2 className="title">{title}</h2>
    <p className="subtitle">{subtitle}</p>

    {props.children}
  </section>
);

export default Section;

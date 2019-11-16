import React from 'react';

import './Section.scss';


const Section = ({title, subtitle, className, ...props}) => (
  <section className={className}>
    <h3 className="title">{title}</h3>
    <p className="subtitle">{subtitle}</p>

    {props.children}
  </section>
);

export default Section;

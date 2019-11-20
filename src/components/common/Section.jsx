import React from 'react';

import './Section.scss';


const Section = ({title, subtitle, className, id, ...props}) => (
  <section className={className} id={id}>
    <h2 className="title">{title}</h2>
    <p className="subtitle">{subtitle}</p>

    {props.children}
  </section>
);

export default Section;

import React from 'react';

import Accomplishments from "./accomplishments"

const Experience = ({ data }) => (
  <section>
    <h1 className="section-header">Experience</h1>
    {data &&
      data.map((item, i) => (
        <article className="my-5" key={`${item.company}-${i}`}>
          <h2 className="item-header">{item.role}</h2>
          <h3 className="item-sub">
            {item.company} | {item.start} - {item.end || <em>present</em> }
          </h3>
          <p className="py-6">{item.description}</p>
          {item.accomplishments && <Accomplishments data={item.accomplishments} />}
        </article>
      ))}
  </section>
);

export default Experience;

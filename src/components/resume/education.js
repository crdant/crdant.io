import React from 'react';

import Accomplishments from "./accomplishments"

const Education = ({ data }) => (
  <section className="mb-5">
    <h1 className="section-header mb-5">Education</h1>
    {data &&
      data.map(item => (
        <div className="my-2" key={item.degree}>
          <h2 className="item-header text-lg">{item.degree}</h2>
          <h3 className="item-sub">{item.institution}</h3>
          <p className="text-sm text-neutral-500 font-light">
            {item.end}
          </p>
          {item.accomplishments && <Accomplishments data={item.accomplishments} />}
        </div>
      ))}
  </section>
);

export default Education;

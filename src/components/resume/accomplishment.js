import React from 'react';

const Accomplishment = ({ key, text }) => (
  <li className="list-disc" key={key}>
    <span className="inline-block font-medium ml-2">{text}</span>
  </li>
);

export default Accomplishment;

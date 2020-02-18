import React from 'react';

const Accomplishment = ({ key, text }) => (
  <li className="list-disc list-inside" key={key}>
    <span className="font-medium ml-2">{text}</span>
  </li>
);

export default Accomplishment;

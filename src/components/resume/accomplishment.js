import React from 'react';

const Accomplishment = ({ text }) => (
  <li className="my-1" key={index}>
    <span className="inline-block font-medium ml-2">{text}</span>
  </li>
);

export default Accomplishment;

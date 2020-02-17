import React from 'react';
import Accomplishment from './accomplishment';

const Accomplishments = ({ data }) => (
  <section>
    <ul className="py-3">
      {data.items.map(item => (
        <ListItem key={`${item}-li`} text={item} />
      ))}
    </ul>
  </section>
);

export default Accomplishments;

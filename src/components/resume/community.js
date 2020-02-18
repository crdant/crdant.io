import React from 'react';

import Accomplishments from "./accomplishments"

const Community = ({ data }) => (
  <section className="mb-5">
    <h1 className="section-header mb-5">Community</h1>
    {data &&
      data.map(item => (
          <div className="my-2" key={item.role}>
            <h2 className="item-header text-lg">{item.role}</h2>
            <h3 className="item-sub">
              {item.organization} 
            </h3>
            <p className="text-sm text-neutral-500 font-light">
              {item.start} - {item.end || <em>present</em> }
            </p>
            <p className="py-6">{item.description}</p>
            {item.accomplishments && <Accomplishments data={item.accomplishments} />}
          </div>
        ))}
    </section>
  );

  export default Community;

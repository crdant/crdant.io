import React from 'react';

import { FaAward } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { GoStar } from 'react-icons/go';

const Icon = ({ type }) => (
    {
      'technology': <MdComputer />,
      'honor': <FaAward />
    }[type] || <GoStar />
)

export default Icon;



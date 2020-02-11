import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import Gravatar from 'react-gravatar'

import { rhythm } from '../utils/typography'
import bioData from './../data/bio'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <Gravatar
          email='chuck@thedantonios.net'
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: "50%"
          }}
        />
        <p>{bioData}</p>
      </div>
    )
  }
}

export default Bio

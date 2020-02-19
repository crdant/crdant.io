import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import Gravatar from 'react-gravatar'

import bioData from './../data/bio'

class Bio extends React.Component {
  render() {
    return (
      <div className="blog-bio">
        <Gravatar
          email='chuck@thedantonios.net'
          className="avatar"
        />
        <p>{bioData}</p>
      </div>
    )
  }
}

export default Bio

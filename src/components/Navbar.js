import React, { Component } from 'react'
import { Link } from 'gatsby'

import { rhythm } from './../utils/typography'
import contactData from './../data/contact'

export class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: rhythm(24),
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Link className="navigation" to={'/'}>Home</Link>
          <Link className="navigation" to={'/journey'}>Journey</Link>
          <Link className="navigation" to={'/speaking'}>Talks</Link>
          <Link className="navigation" to={'/blog'}>Blog</Link> 
          <Link className="navigation" to={'/resume'}>Resume</Link>
          {/* <Link to={'/contact'}>Contact</Link> */}
        </div>
      </div>
    )
  }
}

export default Navbar

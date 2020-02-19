import React, { Component } from 'react'
import { Link } from 'gatsby'

import contactData from './../data/contact'

export class Navbar extends Component {
  render() {
    return (
      <div className="nav-section">
        <div className="nav-menu">
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

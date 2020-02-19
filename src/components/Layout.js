import React from 'react'

import Header from '../components/Header'
import Navbar from './Navbar'
import Contact from './Contact'
import Footer from './Footer'

import '../styles/main.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    const addedStyle = this.props.style

    return (
      <div className="main-layout" style={addedStyle}>
        <Header />
        <Navbar />
        <br />
        {children}
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Layout

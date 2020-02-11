import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { SocialIcon } from 'react-social-icons';

import contactData from './../data/contact'

const styles = {
  rootContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: 'gray',
    paddingTop: 15,
  },
}
class Contact extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <div style={styles.rootContainer}>
        {Object.keys(contactData).map(key => {
          if (contactData[key]) {
            return (
                <div style={{ paddingLeft: 10, paddingRight:10 }}>
                  <SocialIcon url={contactData[key]} style={{ height: 25, width: 25 }}/>
                </div>
            )
          }
        })}
      </div>
    )
  }
}

export default Contact


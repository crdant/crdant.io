import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from './../../components/Layout'

export class view extends Component {
  render() {
    const passedData = this.props.location.state || {
      title: 'default title',
      description: 'default description',
      media: 'https://via.placeholder.com/350',
      talk: 'https://via.placeholder.com',
    }
    const { title, description, image, website } = passedData
    return (
      <Layout>
        <Helmet>
          <title>{`${title}`}</title>
        </Helmet>
        <Link className="back-link" to="/speaking">&larr; back</Link>
        <h2>{title}</h2>
      {/*<img src={media} /> */}
        <div>
          {description}
          <br /> <br />
          {website && (
            <div>
              Website:{' '}
              <a href={talk} target="_new">
                {talk}
              </a>
            </div>
          )}
        </div>
      </Layout>
    )
  }
}

export default view

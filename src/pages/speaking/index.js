import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Layout from '../../components/Layout'
import speakingData from './../../data/speaking'

class speakingIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Portfolio | ${siteTitle}`}
        />
        <h2 className="page-title">Talks</h2>
        <br />
        <div className="text-center">
          <Grid fluid>
            <Row>
              {speakingData.map(p => (
                <Col xs={12} sm={12} md={6} lg={6} key={p.title}>
                  <Link to={'/speaking/view'} state={p} key={p.title}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <div
                        style={{
                          width: 250,
                          height: 200,
                          margin: 10,
                          background: `url(${p.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center',
                        }}
                      />
                      <p>{p.title}</p>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </Grid>
        </div>
      </Layout>
    )
  }
}

export default speakingIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

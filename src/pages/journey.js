import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'
import './../styles/timeline.css'

import Icon from '../components/journey/Icon'

class Journey extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    const journey = get(this, 'props.data.allJourneyYaml.nodes')

    return (
      <Layout style={{ maxWidth: rhythm(45) }}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Journey | ${siteTitle}`}
        />

        <h2 className="page-title">Journey</h2>

        <div>
          <VerticalTimeline animate={false}>
            {journey.map(e => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={e.date}
                icon=<Icon type={e.type} />
                key={e.headline}
              >
                <h3 className="vertical-timeline-element-title">
                  {e.headline}
                </h3>
                <br />
                {e.description}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </Layout>
    )
  }
}

export default Journey

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allJourneyYaml(sort: {fields: date, order: DESC}) {
      nodes {
        date
        description
        headline
        type
      }
    }
  }
`

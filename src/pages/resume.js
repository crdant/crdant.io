import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Hemlet from 'react-helmet'

import Layout from '../components/Layout'

import {
  Experience,
  Education
} from '../components/resume'

import resume from '../../data/resume';
import '../styles/resume.css'

class Resume extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Hemlet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Hemlet>
        <resume className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
          <div className="border-b border-neutral-300 pb-2 my-5 lg:flex">
            <div className="lg:w-2/3 lg:pr-8">
              {resume.experience && <Experience data={resume.experience} />}
            </div>
            <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 ">
              {resume.education && <Education data={resume.education} />}
            </div>
          </div>
        </resume>
      </Layout>
    )
  }
}

export default Resume

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

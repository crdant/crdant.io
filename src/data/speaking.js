import React from 'react'
import { FaDrupal  } from 'react-icons/fa'

const data = [
  {
    title: '"Don\'t Touch that Server": A toolkit for zero-touch production environments',
    talk: 'https://sf2010.drupal.org/conference/sessions/dont-touch-server-toolkit-zero-touch-production-environments.html',
    event: 'DrupalCon San Fransciso 2010',
    date: 'April 20, 2020',
    media: 'https://archive.org/details/dontTouchThatServerAToolkitForZero-touchProductionEnvironments',
    description: `The more access you provide to your production servers, the more risk you have of someone doing 
      something "unexpected" either at the shell or on an administrative screen they don't full understand. A great
      way to address this risk is to limit access to production servers only to emergency. But how do this and still get 
      any work done?`,
    icon: <FaDrupal />
  },
  {
    title: 'An enterprise approach to securing your Drupal sites',
    talk: 'https://sf2010.drupal.org/conference/sessions/enterprise-approach-securing-your-drupal-sites.html',
    event: 'DrupalCon San Fransciso 2010',
    date: 'April 20, 2020',
    media: 'https://archive.org/details/AnEnterpriseApproachToSecuringYourDrupalSites',
    description: `Like any technology, introducing Drupal into your organization is bound to raise questions and 
      objections from a host of vested interests. One of the initial objections is often security. This concern is 
      often more acute when your organization doesn't have a history with the rest of the stack -- so Linux, PHP, 
      MySQL, and/or Apache are new and unknown as well. (with Jason Ingalls)`,
    icon: <FaDrupal />
  },
   {
    title: 'The Future of Drupal in Government',
    talk: 'https://sf2010.drupal.org/conference/sessions/future-drupal-government.html',
    event: 'DrupalCon San Fransciso 2010',
    date: 'April 21, 2020',
    media: 'https://archive.org/details/DrupalconSf2010TheFutureOfDrupalInGovernment',
    description: `In the past year, there has been much discussion about Drupal as a platform to serve Government. As
      we strive to help governments improve efficiency, transparency, accountability, and participation, it becomes
      more apparent that Drupal is naturally equipped to solve many of these challenges. But at the same time, there 
      are incredible counter-forces at play, and implementers need to be aware of them. For instance: transparency is
      at odds with security, participation is at odds with privacy, etc. (with Jeff Walpole)`,
    icon: <FaDrupal />
  },
]

export default data


